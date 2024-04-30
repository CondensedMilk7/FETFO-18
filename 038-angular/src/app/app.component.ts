import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { SquareComponent } from './square/square.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterComponent, SquareComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '038-angular';
}
