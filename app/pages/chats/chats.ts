import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { NavController } from 'ionic-angular';
import { CHATS } from './mock-chats';
import { MessagesPage  } from '../messages/messages';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ChatProvider,Message,Chat } from '../../providers/chat/chat';



/*
   List of chats !!!
 */
@Component({
	templateUrl: 'build/pages/chats/chats.html',
	providers:[ChatProvider]
})
export class ChatsPage {

	chats:Chat[];

	constructor(private navCtrl: NavController, private chatProvider:ChatProvider ) {
	}

  ngOnInit(){
    this.chatProvider.getChats().subscribe(chats=>this.chats=chats, error=>console.log(error));
  }
	showMessage(chat:Chat){
		this.navCtrl.push(MessagesPage, { chat }); 
	}

	remove(chat:Chat){
		let index=this.chats.indexOf(chat);
		this.chats.splice(index,1);
	}

}



