import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ManageTaskService {
  tasks: { name: string; description: string; status: string }[] = [
    { name: 'task 1', description: 'Sleep', status: 'In Progress' },
    { name: 'task 2', description: 'Again Sleep', status: 'To Do' },
  ];
  constructor() {}
  addTask(taskName: string, taskDesc: string, taskStatus: string) {
    if (!taskName || !taskDesc || !taskStatus) {
      alert('please fill all area!');
      return;
    }
    if (
      taskStatus !== 'To Do' &&
      taskStatus !== 'Done' &&
      taskStatus !== 'In Progress'
    ) {
      alert('Enter a valid staus!');
      return;
    }
    this.tasks.push({
      name: taskName,
      description: taskDesc,
      status: taskStatus,
    });
    alert('Task Successfully Added in Task List!');
    console.log(this.tasks);
  }
  deleteTask(idx: number) {
    this.tasks.splice(idx, 1);
  }
  editTask(idx: number) {
    const status = prompt('Enter new status:');
    if (status !== 'To Do' && status !== 'Done' && status !== 'In Progress') {
      alert('Enter a valid staus!');
      return;
    }
    this.tasks[idx].status = status;
  }
  getTask() {
    return this.tasks.slice();
  }
}
