import { Component, Input } from '@angular/core';

@Component({
  selector: 'circle-component',
  standalone: true,
  templateUrl: './circle-button.component.html',
})
export class CircleButton {
  @Input() src = '';
  @Input() canClick = true;
}
