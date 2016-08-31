import { Component } from '@angular/core';

/*
  Generated class for the MessageList component.

  See https://angular.io/docs/ts/latest/api/core/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'message-list',
  templateUrl: 'build/components/message-list/message-list.html'
})
export class MessageList {

  text: string;

  constructor() {
    this.text = 'Hello World';
  }
}
