import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-vertical-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './vertical-navbar.component.html',
  styleUrl: './vertical-navbar.component.scss'
})
export class VerticalNavbarComponent {
  public menuToggle:boolean = false;

  @ViewChild('navbar') navbar!: ElementRef;

  @ViewChild('menutoggle') menutoggle!: ElementRef;

  public menuItems: Array<MenuItem>  = [
    {
      title: "home",
      routerLink: "/"
    },
    {
      title: "ToDo-List",
      routerLink: "/todo"
    },
    {
      title: "defer example",
      routerLink: "/defer"
    },
  ]

  pinMenu() {
    if(this.menuToggle) {
      this.navbar.nativeElement.style.width = '40px';
      this.menutoggle.nativeElement.style.display = 'none';
    } else {
      this.navbar.nativeElement.style.width = '150px';
      this.menutoggle.nativeElement.style.display = 'block';
      // this.navbar.nativeElement.style.position = 'relative';
    }
  }

  openCloseMenu(action:boolean) {
    if(!this.menuToggle) return;
    if(action) {
      this.navbar.nativeElement.style.width = '150px';
      this.menutoggle.nativeElement.style.display = 'block';
      // this.navbar.nativeElement.style.position = 'fixed';
    } else {
      this.navbar.nativeElement.style.width = '40px';
      this.menutoggle.nativeElement.style.display = 'none';
      // this.navbar.nativeElement.style.position = 'relative';
    }
  }

}

export interface MenuItem {
  title: string;
  routerLink: string
}
