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
  todayDate = new Date();
  number = 0.259;

  object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};

  // clickOnMenuLink($event: string) {
  //   this.h2Bar = $event + ' à cliqué sur le bouton !!';
  // }

  btnClicked = false;
  mood = 'sad';

  peoples = ['Aurélien', 'Thomas', 'Pierre'];

  clickOnMenuLink($event): void {
    this.btnClicked = !this.btnClicked;

  }
}
