import { Component, OnInit } from '@angular/core';
import { ManageTaskService } from '../manage-task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.css',
})
export class TaskDetailsComponent implements OnInit {
  taskList: { name: string; description: string; status: string }[] = [];
  constructor(private taskService: ManageTaskService) {
    this.taskList = taskService.tasks;
  }
  ngOnInit(): void {
    this.taskList = this.taskService.getTask();
  }
}
