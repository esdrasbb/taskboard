import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TaskboardService } from './taskboard.service';
import { Estoria } from "./estoria";
import { Tarefa } from "./tarefa";
@Component({
  selector: 'taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.css']
})

export class TaskboardComponent implements OnInit {
  estorias: Estoria[];
  selectedEstoria: Estoria;
  errorMessage: string;

  constructor(
    private router: Router,
    private taskboardService: TaskboardService) { }

  getEstorias(): void {
    this.taskboardService.getEstorias()
      .subscribe(
      value => this.estorias = value,
      error => this.errorMessage = <any>error);
  }

  ngOnInit(): void {
    this.getEstorias();
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedEstoria.id]);
  }

  showTarefas(estoria: Estoria): void {
    this.selectedEstoria = estoria;
  }

  add(estoria: Estoria): void {
    estoria.titulo = estoria.titulo.trim();
    if (!estoria.titulo) { return; }
    this.taskboardService.create(estoria)
      .subscribe(estoria => {
        this.estorias.push(estoria);
        this.selectedEstoria = null;
      });
  }

  addTarefa(estoria: Estoria, descricao: string): void {
    const tarefas = estoria.tarefas;
    const novaTarefa = new Tarefa();
    novaTarefa.id = 1 + tarefas[(tarefas.length - 1)].id;
    novaTarefa.descricao = descricao;
    estoria.tarefas.push(novaTarefa);
    //this.taskboardService.update(estoria);
  }

  delete(id: number): void {
    this.taskboardService
      .delete(id)
      .subscribe(() => {
        this.estorias = this.estorias.filter(h => h.id !== id);
        if (this.selectedEstoria.id === id) { this.selectedEstoria = null; }
      });
}
}
