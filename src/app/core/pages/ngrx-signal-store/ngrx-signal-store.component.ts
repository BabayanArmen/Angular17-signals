import { Component, inject, OnInit, signal } from '@angular/core';
import { ToDosStore } from '../../store/todos.store';
import { JsonPipe } from '@angular/common';
import { ToDo } from '../../models/todo.model';

@Component({
  selector: 'app-ngrx-sygnal-store',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './ngrx-signal-store.component.html',
  styleUrl: './ngrx-signal-store.component.scss'
})
export class NgrxSignalStoreComponent implements OnInit {

  public store = inject(ToDosStore);

  ngOnInit(): void {
    this.loadToDos()
      .then(() => console.log('ToDos Loaded'));
  }

  async loadToDos() {
    await this.store.loadAll()
  }

  async addToDo(title: string) {
    await this.store.addToDo(title);
    title = '';
  }

  async onDeleteTodo(id: number) {
    if(id) {
      await this.store.deleteToDo(id);
    }
  }

  async onUpdateToDo(todo: ToDo) {
    await this.store.updateToDo(todo);
  }

}
