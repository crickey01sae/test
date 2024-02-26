import { Component } from '@angular/core';
import { ManageTaskService } from '../manage-task.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.css',
})
export class TaskEditComponent {
  constructor(private taskService: ManageTaskService) {}
  onAddTask(name: string, description: string, status: string) {
    this.taskService.addTask(name, description, status);
  }
}
