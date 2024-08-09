import { Component, Input,Output,EventEmitter, inject} from '@angular/core';
import {NgIf,NgFor} from '@angular/common'
import {User,Task} from '../../Types_Interfaces/types_interfaces'
import { CardComponent } from "../../shared/card/card.component";
import {DatePipe} from '@angular/common'
import { TaskService } from '../../Services/Tasks.service';
@Component({
  selector: 'task_comp',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) task?:Task
  @Output() completed_task  = new EventEmitter<Task>();

  private taskService = inject(TaskService);

  taskCompleted(){
    if(this.task){
      this.taskService.taskCompleted(this.task);
    }
  }
}
