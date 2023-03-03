import { Component, OnInit } from '@angular/core';
import { NavService, Nav } from './lib/nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  opened: boolean;
  routes: Nav[];
  constructor(private navService: NavService) {}

  ngOnInit() {
    this.navService.sideNavStatus.subscribe((data) => {
      this.opened = data;
    });
    this.routes = this.navService.routes;
  }

  updateNav(event: boolean) {
    this.navService.sideNavStatus.next(event);
  }
}
