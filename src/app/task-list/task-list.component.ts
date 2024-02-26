import { Component } from '@angular/core';
import { ManageTaskService } from '../manage-task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  taskList: { name: string; description: string; status: string }[] = [];
  constructor(private taskService: ManageTaskService) {
    this.taskList = taskService.tasks;
  }
  onDeleteTask(idx: number) {
    console.log(idx);
    this.taskService.deleteTask(idx);
  }
  onEditTask(idx) {
    this.taskService.editTask(idx);
  }
}
