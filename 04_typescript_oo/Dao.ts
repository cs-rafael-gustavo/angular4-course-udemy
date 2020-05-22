import { iDao } from "./iDao";

export class Dao<T> implements iDao<T> {
  nomeTabela!: string;

  inserir(object: T): boolean {
    console.log("Lógica de Inserir");
    return true;
  }

  atualizar(object: T): boolean {
    console.log("Lógica de Atualizar");
    return true;
  }

  remover(id: number): T {
    console.log(`Lógica de Remover - ID: ${id}`);
    return Object();
  }

  selecionar(id: number): T {
    console.log("Lógica de Selecionar");
    return Object();
  }

  selecionarTodos(): T[] {
    console.log("Lógica de Selecionar Todos");
    return [Object()];
  }
}
