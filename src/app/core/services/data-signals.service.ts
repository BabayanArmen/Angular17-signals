import { Injectable, signal, WritableSignal } from '@angular/core';
import { ToDo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataSignalsService {
  private _sharedData: WritableSignal<Array<ToDo>> =  signal<Array<ToDo>>([]);

  constructor() { }

  get sharedData() {
    return this._sharedData;
  }

  public addData(value: ToDo) {
    this._sharedData.update(x => [...x, value]);
  }

  public removeData(value: ToDo) {
    this._sharedData.update(items => items.filter(x => x.id !== value.id)); 
  }
}
