import { Component, Input,Output,EventEmitter} from '@angular/core';
import {NgIf,NgFor} from '@angular/common'
import {User,Task} from '../../Types_Interfaces/types_interfaces'
@Component({
  selector: 'task_comp',
  standalone: true,
  imports: [NgIf,NgFor],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) task?:Task
  
  @Output() currTask = new EventEmitter<Task>(); 

}
