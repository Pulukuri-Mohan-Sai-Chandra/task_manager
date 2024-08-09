import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { userTasks } from '../Static Data/user_tasks';
import { TaskComponent } from './task/task.component';
import {TasksComponent} from './tasks/tasks.component'
import {User,Task} from '../Types_Interfaces/types_interfaces'
import {NgFor,NgIf} from '@angular/common'
@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'task_manager';
  all_users = DUMMY_USERS;
  user_tasks: Task[]=[];
  selected_user!:User
  handleUserEvent(user: User) {
    this.selected_user = user
    this.user_tasks = userTasks.filter((task:Task)=>task.userId == this.selected_user.id)??[];
  }
}
