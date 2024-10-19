import { Component } from '@angular/core';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { CircleButton } from '../../utilities/circle-button.component';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'header-filter',
  standalone: true,
  templateUrl: './header-filter.component.html',
  imports: [CircleButton, NgxSliderModule],
})
export class HeaderFilterComponent {
  minValue: number = 1200;
  maxValue: number = 20000;
  options: Options = {
    floor: 1000,
    ceil: 30000,
  };

  filters = [
    {
      name: 'search',
      icon: 'icon_search.svg',
      options: ['Designer', 'Sofware', 'Engineering', 'Fashion'],
      default: true,
    },
    {
      name: 'Work location',
      icon: 'icon_location.svg',
      options: ['Singapore', 'United States', 'Canada', 'Australia'],
      default: false,
    },
    {
      name: 'Experience',
      icon: 'icon_suitcase.svg',
      options: ['Internship', 'Entry Level', 'Mid Level', 'Senior Level'],
      default: false,
    },
    {
      name: 'money',
      icon: 'icon_wallet.svg',
      options: ['Per month', 'Per year', 'Per hour', 'Per week'],
      default: true,
    },
  ];
}
