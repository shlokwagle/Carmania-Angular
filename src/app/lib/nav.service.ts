import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Nav {
  path: string;
  name: string;
  exact: boolean;
}

@Injectable({ providedIn: 'root' })
export class NavService {
  sideNavStatus = new BehaviorSubject<boolean>(true);
  routes: Nav[] = [
    { path: '', name: 'Home', exact: true },
    { path: 'articles', name: 'Articles', exact: false },
    { path: 'contact', name: 'Contact', exact: false },
  ];

  toggleSidenav() {
    this.sideNavStatus.next(!this.sideNavStatus.value);
  }
}
