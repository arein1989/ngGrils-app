import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItem } from '../interfaces/todo-item';
import { InputButtonUnitComponent } from "../input-button-unit/input-button-unit.component";
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { TodoListService } from '../services/todo-list.service';

@Component({
  selector: 'app-list-manager',
  standalone: true,
  imports: [CommonModule, InputButtonUnitComponent, TodoItemComponent],
  template: `
  <div class="todo-app">
    <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>

    <ul>
      @for(todoItem of todoList; track todoItem.title) {
        <li>
          <app-todo-item [item]="todoItem" (remove)="removeItem($event)" (update)="updateItem($event.item, $event.changes)"></app-todo-item>
        </li>
      }
    </ul>
  </div>
`,
  styleUrls: ['../app.component.css']
})
export class ListManagerComponent {
  todoList: TodoItem[];
  addItem(title: string) {
    this.todoListService.addItem({ title });
  }
  removeItem(item: TodoItem) {
   this.todoListService.deleteItem(item);
  }
  updateItem(item: TodoItem, changes: Partial<TodoItem>) {
    this.todoListService.updateItem(item, changes);
  }
  constructor(private todoListService: TodoListService) {
  this.todoList = this.todoListService.getTodoList();
  }
}
