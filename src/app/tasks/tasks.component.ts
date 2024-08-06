import { Component,Input} from '@angular/core';
import {User,Task} from '../../Types_Interfaces/types_interfaces'
import { NgIf,NgFor } from '@angular/common';
import {userTasks} from '../../Static Data/user_tasks';
import {TaskComponent} from '../task/task.component'
@Component({
  selector: 'tasks_comp',
  standalone: true,
  imports: [NgIf,NgFor,TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) selected_user!:User;
  @Input({required:true})user_tasks?:Task[]

}
