import { Injectable } from '@angular/core';
import { ToDo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private todoes: Array<ToDo> = [
    {
      id:1,
      title: 'task 1'
    },
    {
      id:2,
      title: 'task 2'
    },
    {
      id:3,
      title: 'task 3'
    },
  ]

  constructor() { }

  public getToDoes() {
    return this.todoes;
  }
}
