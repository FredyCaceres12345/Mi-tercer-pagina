import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Escuelas', url: '/escuela-list', icon: 'mail' },
  ];
  public labels = [];
  constructor() {}
}
