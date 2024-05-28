import { Component, effect, inject, signal, WritableSignal } from '@angular/core';
import { ToDo } from '../../models/todo.model';
import { DataSignalsService } from '../../services/data-signals.service';

@Component({
  selector: 'app-reciever',
  standalone: true,
  imports: [],
  templateUrl: './reciever.component.html',
  styleUrl: './reciever.component.scss'
})
export class RecieverComponent {
  public todoes: Array<ToDo> = [];

  private dataSignalsService = inject(DataSignalsService);

  constructor() {
    effect(() => {
      this.todoes = this.dataSignalsService.sharedData()
    })
  }

}
