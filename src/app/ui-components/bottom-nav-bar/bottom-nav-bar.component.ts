import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottom-nav-bar',
  templateUrl: './bottom-nav-bar.component.html',
  styleUrls: ['./bottom-nav-bar.component.scss']
})
export class BottomNavBarComponent {

  constructor(private router: Router) { }

  isRouteActive(route: string): boolean {
    return this.router.isActive(route, true);
  }
}
