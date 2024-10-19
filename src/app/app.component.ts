import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { HeaderFilterComponent } from '../filtering/header/header-filter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RouterOutlet, HeaderComponent, HeaderFilterComponent],
})
export class AppComponent {
  title = 'marketplace';
}
