import { Component } from '@angular/core';
import { PrimaryButton } from '../../utilities/buttons/primary-button.component';
import { WORK_OPTIONS, EXPLOYMENT_TYPES } from '../options';

@Component({
  selector: 'side-filter',
  standalone: true,
  templateUrl: './side-filter.component.html',
  imports: [PrimaryButton],
})
export class SideFilter {
  schedule = WORK_OPTIONS;
  employments = EXPLOYMENT_TYPES;
}
