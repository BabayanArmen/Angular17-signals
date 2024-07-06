import { Routes } from '@angular/router';
import { HomeComponent } from './core/pages/home/home.component';
import { TodoListComponent } from './core/pages/todo-list/todo-list.component';

export const routes: Routes = [
    {
        path: '',
        // component: HomeComponent
        loadComponent: () => import("./core/pages/home/home.component").then((c) => c.HomeComponent)
    },
    {
        path: 'todo',
        // component: TodoListComponent
        loadComponent: () => import("./core/pages/todo-list/todo-list.component").then((c) => c.TodoListComponent)
    },
    {
        path: 'defer',
        loadComponent: () => import("./core/pages/defer-example/defer-example.component").then((c) => c.DeferExampleComponent)
    },
    {
        path: 'state',
        loadComponent: () => import("./core/pages/ngrx-signal-store/ngrx-signal-store.component").then((c) => c.NgrxSignalStoreComponent)
    }
];
 