import { Component, Input,EventEmitter,Output} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const random_index = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'user_comp',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true })
  user!: { id: string; name: string; avatar: string };


  @Output() currUser = new EventEmitter<{ id: string; name: string; avatar: string }>()
  onClickUser() {
    this.currUser.emit(this.user)

  }
  get imgPath() {
    return 'assets/users/' + this.user.avatar;
  }
}
