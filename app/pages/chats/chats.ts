import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { NavController } from 'ionic-angular';
import { CHATS } from './mock-chats';
import { MessagesPage, Message } from '../messages/messages';


export class Chat{
  id: number;
  title: string;
  picture: string;
  lastMessage: Message;
}

/*
   Generated class for the ChatsPage page.

   See http://ionicframework.com/docs/v2/components/#navigation for more info on
   Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/chats/chats.html',
})
export class ChatsPage {

  chats:Chat[];

  constructor(private navCtrl: NavController) {
    this.chats=CHATS;

  }
  showMessage(chat:Chat){
    this.navCtrl.push(MessagesPage, { chat });
  }

	remove(chat:Chat){
		let index=this.chats.indexOf(chat);
		this.chats.splice(index,1);
	}

}
