import { Component } from '@angular/core';
import { RecieverComponent } from '../reciever/reciever.component';
import { SenderComponent } from '../sender/sender.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RecieverComponent, SenderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {



}
