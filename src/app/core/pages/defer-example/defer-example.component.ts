import { Component } from '@angular/core';
import { LargeComponentComponent } from './large-component/large-component.component';

@Component({
  selector: 'app-defer-example',
  standalone: true,
  imports: [LargeComponentComponent],
  templateUrl: './defer-example.component.html',
  styleUrl: './defer-example.component.scss'
})
export class DeferExampleComponent {


}
