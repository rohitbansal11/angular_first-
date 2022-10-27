import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo: Todo = new Todo();

  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick(todo: Todo) {
    console.log('onclick on ckildjfjf ');
    console.log(todo);
    this.todoDelete.emit(todo)
  }
}