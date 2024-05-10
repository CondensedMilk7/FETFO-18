import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HighlightDirective } from './highlight.directive';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';

export interface ShoppingItem {
  name: string;
  description: string;
  id: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    ShoppingItemComponent,
    HighlightDirective,
    NgClass,
    FormsModule,
    NgIf,
    NgFor,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '040-directives';
  isSpecial = true;
  isInteresting = true;
  headingVisible = true;

  shoppingList: ShoppingItem[] = [
    {
      name: 'Bread',
      description: 'Gluten free',
      id: 1,
    },
    {
      name: 'Milk',
      description: 'Lactose free',
      id: 2,
    },
    {
      name: 'Corn Syrup',
      description: 'Sugar free',
      id: 3,
    },
  ];

  onDeleteFromList(id: number) {
    this.shoppingList = this.shoppingList.filter((item) => item.id !== id);
  }

  listTrackBy(index: number, item: ShoppingItem) {
    return item.id;
  }
}
