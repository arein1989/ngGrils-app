import { Component } from '@angular/core';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputButtonUnitComponent],
  template: `
    <h1>
      Welcome to {{ title }}!
    </h1>
    <app-input-button-unit></app-input-button-unit>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngGrils-app';
}
