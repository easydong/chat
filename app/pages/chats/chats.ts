import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CHATS } from './mock-chats'

export class Message{
  id:number;
  content:string;
  createdAt: Date;
}

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
	remove(chat:Chat){
		let index=this.chats.indexOf(chat);
		this.chats.splice(index,1);
	}

}
