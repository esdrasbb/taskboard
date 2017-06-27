import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h2>{{title}}</h2>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TaskBoard';
}
