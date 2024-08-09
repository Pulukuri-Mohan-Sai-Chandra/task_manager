import { Injectable } from "@angular/core";
import { Task } from "../Types_Interfaces/types_interfaces";

@Injectable({providedIn:'root'})
export class TaskService{
    private Tasks:Task[] = []

      constructor(){
        let tasks = localStorage.getItem('tasks');
        if(tasks){
          this.Tasks = JSON.parse(tasks);
        }
      }
      getAllTasks(){
        return this.Tasks;
      }

      addTask(newTask:Task){
        this.Tasks.push(newTask);
        this.saveTasks();
      }

      taskCompleted(newTask:Task){
        this.Tasks = this.Tasks.filter((task:Task) => task.id != newTask.id)
        this.saveTasks()
      }
      private saveTasks(){
        localStorage.setItem('tasks',JSON.stringify(this.Tasks))
      }

}
