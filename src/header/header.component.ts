import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'header-component',
  standalone: true,
  templateUrl: './header.component.html',
  imports: [RouterLink, ProfileComponent, RouterOutlet],
})
export class HeaderComponent {
  name = 'LuckyJob';

  navLinks = [
    { id: 1, title: 'Find job', link: '' },
    { id: 2, title: 'Messages', link: '' },
    { id: 3, title: 'Hiring', link: '' },
    { id: 4, title: 'Community', link: '' },
    { id: 5, title: 'FAQ', link: '' },
  ];

  linkClass =
    'text-sm text-custom-grey-1 hover:opacity-85 duration-150 py-5 border-b-[1px]';

  location = 'New York, NY';

  currentPage = this.navLinks[0].title;

  toggleNav(page: string) {
    this.currentPage = page;
  }
}
