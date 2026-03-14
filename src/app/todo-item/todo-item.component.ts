import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItem } from '../interfaces/todo-item';
@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="todo-item">
      <input type="checkbox" class="todo-checkbox" (click)="completeItem()" [checked]="item.completed"/>
      {{ item.title }}
      <button class="btn btn-red" (click)="removeItem()">
        remove
      </button>
    </div>
  `,
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  ngOnInit(): void {
  }
  removeItem() {
    this.remove.emit(this.item);
  }
  @Input() item!: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
  @Output() update: EventEmitter<any> = new EventEmitter<any>();
  // put this method below ngOnInit
  completeItem(): void {
    this.update.emit({
      item: this.item,
      changes: { completed: !this.item.completed }
    });
  }
}
