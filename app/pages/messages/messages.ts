import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { DatePipe } from '@angular/common';
import {Chat } from '../chats/chats'

export class Message{
  content:string;
  createdAt: Date;
}

/*
  Generated class for the MessagesPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/messages/messages.html',
})
export class MessagesPage {
  activeChat:Chat;

  constructor(private navCtrl: NavController, private params: NavParams) {
    this.activeChat=params.get('chat');
		console.log('data'+this.activeChat	);

  }

}
