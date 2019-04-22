import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public default: string;

  constructor() {
    this.default = '../assets/images/logo-1.png';
  }
}
