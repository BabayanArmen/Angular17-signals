import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { ToDo } from "../models/todo.model"
import { inject } from "@angular/core";
import { TodoDataService } from "../services/todo-data.service";
import { lastValueFrom } from "rxjs";
import { state } from "@angular/animations";

// export type ToDosFilter = "all" | "pending" | "complited";

type ToDoState = {
    todos: ToDo[];
    loading: boolean;
    // filter: ToDosFilter;
}

const initialState: ToDoState = {
    todos: [],
    loading: false,
    // filter: "all"
}

export const ToDosStore = signalStore(
    {providedIn: "root"},
    withState(initialState),
    withMethods(
        (store, todoesDateaService = inject(TodoDataService)) => ({

            async loadAll() {

                patchState(store, {loading: true});

                let todos = await todoesDateaService.get().toPromise();

                patchState(store, {todos, loading: false});

            },

            async addToDo(title: string) {

                //// async await version
                let todo = await lastValueFrom(todoesDateaService.add({title}));
                if(todo) {
                    patchState(store, (state) => ({
                        todos: [...state.todos, todo]
                    }))
                }

                //// subsribe version
                // todoesDateaService.add({title})
                // .subscribe((res: ToDo) => {
                //     patchState(store, (state) => ({
                //         todos: [...state.todos, res]
                //     }))
                // })
                
                //// only signal reponse form http version 
                // let todo = todoesDateaService.addSignalVersion({title});
                // if(todo()) {
                //     patchState(store, (state) => ({
                //         todos: [...state.todos, todo() as ToDo]
                //     }))
                // }
    
            },

            async deleteToDo(id: number) {
                await lastValueFrom(todoesDateaService.delete(id));
                
                patchState(store, (state) => ({
                    todos: state.todos.filter(todo => todo.id !== id)
                }))
            },

            async updateToDo(todo: ToDo) {

                await lastValueFrom(todoesDateaService.edit(todo));

                patchState(store, (state) => ({
                    todos: state.todos.map(x =>  x.id == todo.id ? todo : x)
                }))

            }

        })
    ),
    // withComputed((state) => ({}))
);