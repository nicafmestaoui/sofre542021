import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { Logger } from '../../services/logger';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [];
  constructor(private logger: Logger) {}

  logTodos(): void {
    this.logger.logger(this.todos);
  }

  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  deleteTodo(todo: Todo): void {
    const index = this.todos.indexOf(todo);

    this.todos.splice(index, 1);
  }
}
