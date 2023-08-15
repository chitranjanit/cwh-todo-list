import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor() {
    this.todos = [
      {
        sno: 1,
        title: 'Tthis is title',
        desc: 'Description',
        active: true,
      },
      {
        sno: 2,
        title: 'Tthis is title 2',
        desc: 'Description 2',
        active: true,
      },
      {
        sno: 3,
        title: 'Tthis is title 3',
        desc: 'Description 3',
        active: true,
      },
    ];
  }

  ngOnInit(): void {}

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter((item) => {
      return item.sno !== todo.sno;
    });
  }

  addTodo(todo: Todo) {
    console.log(todo);
    if (todo) {
      this.todos.push(todo);
    }
  }
}
