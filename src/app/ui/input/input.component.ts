import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p [ngClass]="class">
      input works!
      {{ value }}
    </p>
  `,
  styles: [
    `
      .red {
        color: red;
      }

      .green {
        color: green;
      }

      .blue {
        color: blue;
      }
    `,
  ],
})
export class InputComponent {
  @Input() class = 'test';
  @Input() value = 'test';
}
