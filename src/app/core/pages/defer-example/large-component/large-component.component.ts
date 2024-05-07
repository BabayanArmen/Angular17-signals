import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-large-component',
  standalone: true,
  imports: [],
  templateUrl: './large-component.component.html',
  styleUrl: './large-component.component.scss'
})
export class LargeComponentComponent implements OnInit, AfterViewInit {
  public data: any = null;

  constructor(private dataService: DataService) {}

  ngAfterViewInit(): void {
    // console.log("large component loaded");
  }

  ngOnInit(): void {
    // console.log("large component loaded");
    this.dataService.getDummyData().subscribe(res => {
      console.log(res);
    })
  }

}
