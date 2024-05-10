import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../types/user';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
})
export class UserCardComponent {
  @Input({ required: true }) user!: User;
  @Input() cardColor = 'aliceblue';
  @Output() followUser = new EventEmitter<User>();

  onFollowUser() {
    this.followUser.emit(this.user);
  }
}
