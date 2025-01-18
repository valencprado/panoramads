import { Component, Input } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';

type item = {
  label: string
}
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})

export class NavbarComponent {
  @Input()
  items: item[] = [
    {
      label: 'teste',
    },
    { label: 'teste2' },
  ];
}
