import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  localitem: any;
  todos: Todo[] = [];
  singleitem:Todo[] = [];
  constructor() {
    this.localitem = localStorage.getItem('todos');
    if (this.localitem == null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localitem);
    }
  }

  ngOnInit(): void {}

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    console.log(index);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  AddTodo(todo: Todo) {
    this.todos.push(todo);

    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  statusChenge(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  
}
