import { Component, Input,Output,EventEmitter} from '@angular/core';
import {NgIf,NgFor} from '@angular/common'
import {User,Task} from '../../Types_Interfaces/types_interfaces'
import { CardComponent } from "../../shared/card/card.component";
import {DatePipe} from '@angular/common'
@Component({
  selector: 'task_comp',
  standalone: true,
  imports: [NgIf, NgFor, CardComponent,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) task?:Task
  @Output() completed_task  = new EventEmitter<Task>();

  taskCompleted(){
    this.completed_task.emit(this.task);
  }
}
