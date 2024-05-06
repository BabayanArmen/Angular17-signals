import { Component, computed, effect, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ToDo } from '../../models/todo.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements OnInit {
  public todoes: WritableSignal<Array<ToDo>> = signal<Array<ToDo>>([]);

  private dataService = inject(DataService);

  constructor(
    // private dataService: DataService
  ) {

    // effect(() => {
    //   console.log("signal changes", this.todoes().length);
    // },
    // // {
    // //   allowSignalWrites: true
    // // }
    // )

  }

  ngOnInit(): void {
    this.todoes.set(this.dataService.getToDoes());
  }

  public addToDo(value: string) {
    this.todoes.update(x => [...x, {id: this.todoes().length + 1, title: value}]);
  }

  public remove(id: number) {
    //// method 1
    // let res = this.todoes().filter(x => x.id !== id);
    // this.todoes.update(x => [...res]);
    //// method 2
    this.todoes.update(items => items.filter(x => x.id !== id));
  }

  public todoesComputed = computed(() => {
    let res = this.todoes().map(x => {
      return {...x}
    })
    res.forEach(x => x.title = x.title + "computed");
    return res;
  });

  public total = computed(() => this.todoes().length);

  // public names = signal(["Valod", "Babken"])

}
