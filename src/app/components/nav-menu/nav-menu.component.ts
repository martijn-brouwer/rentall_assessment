import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  goTo(url:string): void {
    this.router.navigate([url]);
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
