import { CommonModule } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  standalone: true,
  imports: [CommonModule],
  template: `
  <input #inputElementRef
         [value]="title"
         (keyup.enter)="submitValue(getInputValue($event))">

  <button (click)="submitValue(inputElementRef.value)">
    Save
  </button>
`,
  styleUrls: ['./input-button-unit.component.css']
})

export class InputButtonUnitComponent implements OnInit {
  title = 'Hello World';

  constructor() { }

  ngOnInit(): void {
  }

  changeTitle(newTitle: string): void {
  this.submit.emit(newTitle);
}

submitValue(newTitle: string) {
  this.submit.emit(newTitle);
}
  getInputValue(event: Event) {
    return (event.target as HTMLInputElement).value;
  }
  @Output() submit: EventEmitter<string> = new EventEmitter<string>();
}
