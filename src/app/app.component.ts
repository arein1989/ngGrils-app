import { Component } from '@angular/core';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoItem } from './interfaces/todo-item';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputButtonUnitComponent, TodoItemComponent],
  template: `
    <h1>
      Welcome to {{ title }}!
    </h1>
    <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>
    <ul>
  @for( todoItem of todoList; track todoItem.title) {
    <li>
      <app-todo-item [item]="todoItem"></app-todo-item>
    </li>
  }
</ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  addItem(title: string) {
  this.todoList.push({ title });
}
  todoList: TodoItem[]  = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];
}
