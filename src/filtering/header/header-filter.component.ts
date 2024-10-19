import { Component } from '@angular/core';
import { CircleButton } from '../../utilities/circle-button.component';
import { WORK_OPTIONS } from '../options';

@Component({
  selector: 'header-filter',
  standalone: true,
  templateUrl: './header-filter.component.html',
  imports: [CircleButton],
})
export class HeaderFilterComponent {
  sliderVal = 50;
  minVal = 1000;
  maxVal = 50000;

  display = parseInt(((this.sliderVal / 100) * this.maxVal).toString());

  handleChange(event: any) {
    this.sliderVal = event.target.value;
    this.display = parseInt(((this.sliderVal / 100) * this.maxVal).toString());
  }

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
      options: WORK_OPTIONS,
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
