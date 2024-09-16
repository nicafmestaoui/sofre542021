import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../model/todo';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  todo = new Todo();

  constructor(
    private todoService: TodoService,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
    this.toaster.info('Bienvenu dans le gestionnaire de Todo');
  }

  addTodo(): void {
    this.todoService.addTodo(this.todo);
    this.toaster.success(`Le todo ${this.todo.name} a été ajouté avec succès`);
    this.todo = new Todo();
  }
  delete(todo: Todo): void {
    this.toaster.success(`Le todo ${todo.name} a été supprimé avec succès`);
    this.todoService.deleteTodo(todo);
  }
}
