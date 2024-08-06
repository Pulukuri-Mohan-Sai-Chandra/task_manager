import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { userTasks } from '../Static Data/user_tasks';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent,TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'task_manager';
  all_users = DUMMY_USERS;
  tasks: { id: number; title: string }[] = [];
  user_name!:{id:string,name:string,avatar:string}
  handleUserEvent(user: { id: string; name: string; avatar: string }) {
    this.user_name = user
    this.tasks = userTasks[user.id];
  }
}
