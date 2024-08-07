import { Component,Input} from '@angular/core';
import {User,Task} from '../../Types_Interfaces/types_interfaces'
import { NgIf,NgFor } from '@angular/common';
import {userTasks} from '../../Static Data/user_tasks';
import {TaskComponent} from '../task/task.component';
import {NewTaskComponent} from '../new-task/new-task.component'
import { CardComponent } from "../../shared/card/card.component";
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
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]

  AddTask(){
    this.open_model = true;
  }

  closeModel(){
    this.open_model = false;
  }

  taskCreated(newTask:Task){
    this.tasks.push(newTask)
  }

  taskCompleted(newTask:Task){
    this.tasks = this.tasks.filter((task:Task)=> newTask.id != task.id)
  }
}
