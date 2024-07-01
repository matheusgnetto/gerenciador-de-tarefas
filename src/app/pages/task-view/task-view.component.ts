import { Component } from '@angular/core';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent {
  tasks: { titulo: string, status: string }[] = [];

  constructor() {
    // Exemplo de inicialização de tarefas (pode ser carregado de um serviço ou local storage)
    this.tasks = [
      { titulo: 'Tarefa #1', status: 'incompleta' },
      { titulo: 'Tarefa #2', status: 'completa' },
      { titulo: 'Tarefa #3', status: 'incompleta' }
    ];
  }

  adicionarTarefa() {
    const novaTarefa = { titulo: 'Nova Tarefa', status: 'incompleta' };
    this.tasks.push(novaTarefa);
  }
}
