import { Component } from '@angular/core';

@Component({
  selector: 'profile-component',
  standalone: true,
  templateUrl: './profile.component.html',
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
