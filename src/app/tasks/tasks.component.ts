import { Component,Input} from '@angular/core';
import {User,Task} from '../../Types_Interfaces/types_interfaces'
import { NgIf,NgFor } from '@angular/common';
import {userTasks} from '../../Static Data/user_tasks';
import {TaskComponent} from '../task/task.component';
import {NewTaskComponent} from '../new-task/new-task.component'
import { CardComponent } from "../../shared/card/card.component";
import {TaskService} from '../../Services/Tasks.service'
@Component({
  selector: 'tasks_comp',
  standalone: true,
  imports: [NgIf, NgFor, TaskComponent, NewTaskComponent, CardComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) selected_user!:User;
  open_model = false;
  tasks?:Task[];

  constructor(private taskService:TaskService){
    this.taskService = taskService;
    this.tasks = taskService.getAllTasks();
  }


  AddTask(){
    this.open_model = true;
  }

  closeModel(){
    this.open_model = false;
  }
  taskCompleted(c_task:Task){
    this.taskService.taskCompleted(c_task);
    this.tasks = this.taskService.getAllTasks();
  }
  taskCreated(c_task:Task){
    this.taskService.addTask(c_task);
  }
}
