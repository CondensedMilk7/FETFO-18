import { Component, Input } from '@angular/core';
import { ShoppingItem } from '../app.component';

@Component({
  selector: 'app-shopping-item',
  standalone: true,
  imports: [],
  templateUrl: './shopping-item.component.html',
  styleUrl: './shopping-item.component.css',
})
export class ShoppingItemComponent {
  @Input({ required: true }) item!: ShoppingItem;
}
