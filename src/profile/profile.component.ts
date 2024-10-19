import { Component } from '@angular/core';
import { CircleButton } from '../utilities/circle-button.component';

@Component({
  selector: 'profile-component',
  standalone: true,
  templateUrl: './profile.component.html',
  imports: [CircleButton],
})
export class ProfileComponent {
  user_details = {
    user: {
      name: 'John Doe',
      pfp: '/images/user_profile.svg',
    },
    online: true,
  };
}
