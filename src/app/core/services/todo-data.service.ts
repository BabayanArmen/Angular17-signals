import { HttpClient } from '@angular/common/http';
import { Injectable, Signal } from '@angular/core';
import { ToDo } from '../models/todo.model';
import { Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  private baseUrl:string = "http://localhost:3000/todo";

  constructor(
    private http: HttpClient
  ) { }

  get(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>(this.baseUrl);
  }

  getById(id: number): Observable<ToDo> {
    return this.http.get<ToDo>(this.baseUrl+'/'+id);
  }

  add(todo: ToDo): Observable<ToDo> {
    return this.http.post<ToDo>(this.baseUrl, todo);
  }

  //// http signal response version
  // addSignalVersion(todo: ToDo): Signal<ToDo> {
  //   return toSignal<ToDo>(this.http.post<ToDo>(this.baseUrl, todo)) as Signal<ToDo>;
  // }

  edit(todo: ToDo): Observable<ToDo> {
    return this.http.put<ToDo>(this.baseUrl + '/' + todo.id, todo);
  }

  delete(id: number): Observable<{}> {
    return this.http.delete<{}>(this.baseUrl+'/'+id);
  }
  
}
