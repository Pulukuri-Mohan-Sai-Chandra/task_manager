import { Component, Input,EventEmitter,Output} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import {User} from '../../Types_Interfaces/types_interfaces'
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
  user?: User;


  @Output() currUser = new EventEmitter<User>()
  onClickUser() {
    this.currUser.emit(this.user)

  }
  get imgPath() {
    return 'assets/users/' + this.user?.avatar;
  }
}
