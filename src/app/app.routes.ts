import { Routes } from '@angular/router';
import { HomeComponent } from './core/pages/home/home.component';
import { TodoListComponent } from './core/pages/todo-list/todo-list.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'todo',
        component: TodoListComponent
    }
];
