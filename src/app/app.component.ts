import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  h2Bar: string;

  constructor() {
    setTheme('bs4');
  }
  title = 'firstProject';
  firstname = 'Mickael';
  lastname = 'Aubin';

  clickOnMenuLink($event: string) {
    this.h2Bar = $event + ' à cliqué sur le bouton !!';
  }
}
