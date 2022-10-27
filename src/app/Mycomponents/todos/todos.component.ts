import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  constructor() {
    this.todos = [
      {
        sno: 1,
        title: 'qqqqqqqq',
        desc: '222222',
        active: true,
      },
      {
        sno: 2,
        title: 'qqqqqqqq',
        desc: '222222',
        active: true,
      },
      {
        sno: 3,
        title: 'qqqqqqqq',
        desc: '222222',
        active: true,
      },
    ];
  }

  ngOnInit(): void {}

  deleteTodo(todo: Todo) {

    const index = this.todos.indexOf(todo)
    console.log(index);
    this.todos.splice(index,1)

  }
}
