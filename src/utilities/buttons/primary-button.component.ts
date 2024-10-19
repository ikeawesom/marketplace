import { Component, Input } from '@angular/core';

@Component({
  selector: 'primary-button',
  standalone: true,
  templateUrl: './primary-button.component.html',
})
export class PrimaryButton {
  @Input() handleClick = () => {};

  onClick() {
    this.handleClick();
  }
}
