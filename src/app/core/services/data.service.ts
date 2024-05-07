import { Injectable } from '@angular/core';
import { ToDo } from '../models/todo.model';
import { HttpClient } from '@angular/common/http';

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

  constructor(
    private http: HttpClient
  ) {}

  public getToDoes() {
    return this.todoes;
  }

  public getDummyData() {
    return this.http.get<any>("https://dummyjson.com/products");
  }
}
