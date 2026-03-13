import { Component } from '@angular/core';
import { ListManagerComponent } from './list-manager/list-manager.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ListManagerComponent],
    template: `
    <h1 class="app-title">
      Welcome to {{ title }}!
    </h1>

    <app-list-manager></app-list-manager>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  todoList: { title: string }[] = [];
  addItem(title: string) {
  this.todoList.push({ title });
}
}
