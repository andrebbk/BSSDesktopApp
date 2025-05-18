import { Component, input, output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-left-sidebar',
  standalone: false,
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.scss'
})
export class LeftSidebarComponent {
  isLeftSidebarCollapsed = input.required<boolean>();
  changeIsLeftSidebarCollapsed = output<boolean>();

  items = [
    {
      routeLink: 'dashboard',
      icon: 'fal fa-home',
      label: 'Início',
    },
    {
      routeLink: 'students',
      icon: 'fal fa-user',
      label: 'Alunos',
    },
    {
      routeLink: 'classes',
      icon: 'fal fa-swimmer',
      label: 'Aulas',
    },
    {
      routeLink: 'settings',
      icon: 'fal fa-cog',
      label: 'Configurações',
    },
  ];

  constructor(private router: Router) {
    this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => {
          console.log('Route changed to:', event.urlAfterRedirects);
          // You can do any logic here, like updating active states, logging, etc.

          this.closeSidenav();
        });
  }

  toggleCollapse(): void {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  }

  closeSidenav(): void {
    this.changeIsLeftSidebarCollapsed.emit(true);
  }

  onMouseEnter(): void {
    this.changeIsLeftSidebarCollapsed.emit(false);
  }

  onMouseLeave(): void {
    this.changeIsLeftSidebarCollapsed.emit(true);
  }
}
