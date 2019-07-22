import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  modalRef: any;
  titleMenu: 'mon menu';
  fullName: string;
  @Input() firstname: string;
  @Input() lastname: string;
  @Output() clickEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor(private toto: BsModalService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.toto.show(template);
  }

  sendAlert() {
    this.fullName = this.lastname + ' ' + this.firstname;
    this.clickEmitter.emit(this.fullName);
  }
  ngOnInit(): void {}
}
