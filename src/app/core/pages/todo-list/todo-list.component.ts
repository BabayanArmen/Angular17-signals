import { Component, OnInit, signal, WritableSignal } from '@angular/core';
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

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.todoes.set(this.dataService.getToDoes());
  }

  public addToDo(value: string) {
    this.todoes.update(x => [...x, {id: this.todoes().length + 1, title: value}] )
  }

  public remove(id: number) {
    let res = this.todoes().filter(x => x.id !== id);
    this.todoes.update(x => [...res]);
  }

}
