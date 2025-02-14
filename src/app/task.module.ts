import { NgModule } from "@angular/core";
import { TaskComponent } from "./task/task.component";
import { TasksComponent } from "./tasks/tasks.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { FormsModule } from "@angular/forms";
import { CardModule } from "../shared/card/card.module";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations:[TaskComponent,TasksComponent,NewTaskComponent],
  exports:[TasksComponent,TaskComponent,NewTaskComponent],
  imports:[FormsModule,CardModule,CommonModule]
})
export class TaskModule{}
