import { Tarefa } from './tarefa';

export class Estoria {
  id: number;
  titulo: string;
  descricao: string;
  pontos: number;
  tarefas: Tarefa[];
}
