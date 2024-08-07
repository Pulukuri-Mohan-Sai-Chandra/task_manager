import { Component,Output,EventEmitter, Input, inject } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { Task, User } from '../../Types_Interfaces/types_interfaces';
import {TaskService} from '../../Services/Tasks.service'
@Component({
  selector: 'new-task-comp',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true}) selected_user?:User
  @Output() cancleClick = new EventEmitter<boolean>();
  @Output() backDropClick = new EventEmitter<boolean>();
  @Output() createEvent = new EventEmitter<Task>();
  new_task_data:Task= {
    id:"",
    title:"",
    userId:"",
    summary:"",
    dueDate:""
  }

  private taskService = inject(TaskService);

  onCancleClick(){

    this.cancleClick.emit(false);
  }
  onBackDropClick(){
    this.backDropClick.emit(false);
  }
  onSubmit(obj:any){
    if(this.selected_user){
      this.new_task_data.userId = this.selected_user.id
    }
    this.new_task_data.id = new Date().getMilliseconds().toString();
    this.taskService.addTask(this.new_task_data);
    this.onCancleClick();
  }
}
