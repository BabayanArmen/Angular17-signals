import { Component, effect, inject } from '@angular/core';
import { DataSignalsService } from '../../services/data-signals.service';
import { ToDo } from '../../models/todo.model';

@Component({
  selector: 'app-sender',
  standalone: true,
  imports: [],
  templateUrl: './sender.component.html',
  styleUrl: './sender.component.scss'
})
export class SenderComponent {
  private dataSignalsService = inject(DataSignalsService);

  public todoes:Array<ToDo> = [];

  constructor() {
    effect(() => {
      this.todoes = this.dataSignalsService.sharedData();
    })
  }

  sendData(event: any) {
    this.dataSignalsService.addData({id: Math.floor(Math.random() * 1000), title: event.target.value});
    event.target.value = '';
  }

}
