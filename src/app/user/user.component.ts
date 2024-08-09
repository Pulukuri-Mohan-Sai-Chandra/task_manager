import { Component, Input,EventEmitter,Output} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import {User} from '../../Types_Interfaces/types_interfaces'
import { CardComponent } from "../../shared/card/card.component";
const random_index = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'user_comp',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true })
  user?: User;

  @Input({required:true}) selected_user?:User

  @Output() currUser = new EventEmitter<User>()
  onClickUser() {
    this.currUser.emit(this.user)

  }

  activeUser(){
    if(this.selected_user){
      return this.selected_user.id === this.user?.id
    }
    return false;
  }

  get imgPath() {
    return 'assets/users/' + this.user?.avatar;
  }
}
