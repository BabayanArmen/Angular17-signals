import { Routes } from '@angular/router';
import { HomeComponent } from './core/pages/home/home.component';
import { TodoListComponent } from './core/pages/todo-list/todo-list.component';

export const routes: Routes = [
    {
        path: '',
        // component: HomeComponent
        loadComponent: () => import("./core/pages/home/home.component").then((m) => m.HomeComponent)
    },
    {
        path: 'todo',
        // component: TodoListComponent
        loadComponent: () => import("./core/pages/todo-list/todo-list.component").then((m) => m.TodoListComponent)
    }
];
