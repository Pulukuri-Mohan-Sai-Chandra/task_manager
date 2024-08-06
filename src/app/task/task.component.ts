import { Component, Input } from '@angular/core';

@Component({
  selector: 'task_comp',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) select_user!:{id:string,name:string,avatar:string}
}
