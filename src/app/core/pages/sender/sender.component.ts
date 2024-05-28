import { Component, inject } from '@angular/core';
import { DataSignalsService } from '../../services/data-signals.service';

@Component({
  selector: 'app-sender',
  standalone: true,
  imports: [],
  templateUrl: './sender.component.html',
  styleUrl: './sender.component.scss'
})
export class SenderComponent {
  private dataSignalsService = inject(DataSignalsService);

  constructor() {}

  sendData(event: any) {
    this.dataSignalsService.addData({id: Math.floor(Math.random() * 1000), title: event.target.value});
    event.target.value = '';
  }

}
