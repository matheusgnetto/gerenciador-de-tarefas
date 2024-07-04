import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-view',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  styleUrls: ['./task-view.component.scss'],
  templateUrl: './task-view.component.html'
})
export class TaskViewComponent implements OnInit {
  tasks: any[] = [];
  newTask: any = { titulo: '', descricao: '', status: 'Pendente', data_vencimento: '' };

  constructor(public taskService: TaskService) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks()
      .subscribe(tasks => {
        this.tasks = tasks;
      });
  }

  adicionarTarefa() {
    if (this.newTask.titulo.trim() && this.newTask.descricao.trim() && this.newTask.data_vencimento.trim()) {
      this.taskService.createTask(this.newTask)
        .subscribe(task => {
          this.tasks.push(task);
          this.clearForm();
        });
    }
  }

  editarTarefa(task: any) {
    const updatedTask = {
      ...task,
      status: task.status === 'Pendente' ? 'Completa' : 'Pendente'
    };
    this.taskService.updateTask(task.id, updatedTask)
      .subscribe(() => {
        task.status = updatedTask.status;
      });
  }

  deletarTarefa(id: number) {
    this.taskService.deleteTask(id)
      .subscribe(() => {
        this.tasks = this.tasks.filter(task => task.id !== id);
      });
  }

  clearForm() {
    this.newTask = { titulo: '', descricao: '', status: 'Pendente', data_vencimento: '' };
  }
}
