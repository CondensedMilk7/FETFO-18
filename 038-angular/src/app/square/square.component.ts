import { Component } from '@angular/core';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [],
  template: `<div class="square"></div>`,
  styles: `
    .square {
      width: 100px;
      height: 100px;
      background-color: blue;
    }
  `,
})
export class SquareComponent {}
