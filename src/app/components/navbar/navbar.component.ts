import { Component, Input } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonModule, MenubarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input()
  items: MenuItem[] = [
    { label: 'Home', routerLink: '/' },
    { label: 'Sobre', routerLink: '/about' },
  ];
  icon: string = 'pi pi-sun';
  toggleDarkMode() {
    const element = document.querySelector('html');
    element!.classList.toggle('dark-theme');
    if(element?.classList.contains('dark-theme')) {
      this.icon = 'pi pi-moon'
    }
    else {
      this.icon = 'pi pi-sun'
    }
  }
}
