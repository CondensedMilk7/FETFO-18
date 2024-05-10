import { Component } from '@angular/core';
import { User } from './types/user';
import { UserCardComponent } from './user-card/user-card.component';
import { SizerComponent } from './sizer/sizer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserCardComponent, SizerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  imgData = {
    src: 'https://images.unsplash.com/photo-1628612380382-e6204e135307?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'A small orange kitten',
  };
  btnDisabled = false;
  squareClass = 'square-red';
  buttonColor = 'violet';
  buttonLabel = 'Color changer';
  fontSize = 18;

  users: User[] = [
    {
      name: 'John Doe',
      avatar:
        'https://images.unsplash.com/photo-1492447273231-0f8fecec1e3a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Jane Doe',
      avatar:
        'https://images.unsplash.com/photo-1545205597-ad550b48864f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  onNewImage() {
    this.imgData.src =
      'https://images.unsplash.com/photo-1616152393908-3785ed107d25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  }

  onChangeSquare() {
    this.squareClass =
      this.squareClass === 'square-red' ? 'square-blue' : 'square-red';
  }

  onChangeButtonColor() {
    this.buttonColor = 'blue';
  }

  onFollowUser(data: User) {
    console.log('follow', data);
  }
}
