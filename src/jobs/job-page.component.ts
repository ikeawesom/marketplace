import { Component } from '@angular/core';
import { CircleButton } from '../utilities/circle-button.component';
import { DUMMY_JOBS } from './constants';
import { PrimaryButton } from '../utilities/buttons/primary-button.component';

@Component({
  selector: 'job-page',
  standalone: true,
  templateUrl: './job-page.component.html',
  imports: [CircleButton, PrimaryButton],
})
export class JobPage {
  jobsList = DUMMY_JOBS;
}
