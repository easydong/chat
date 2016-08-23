import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { NavController } from 'ionic-angular';
import { CHATS } from './mock-chats';
import { MessagesPage, Message } from '../messages/messages';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable }     from 'rxjs/Observable';
import  randomWords      from 'random-words';


export class Chat{
	id: number;
	title: string;
	picture: string;
	lastMessage: Message;
}
@Injectable()
export class ChatProvider {

	private url="http://api.randomuser.me/?results=10";
	constructor(private http: Http) {}
   
	getChats():Observable<Chat[]>{
		return this.http.get(this.url)
		.map(response => {
      let randomWords:any;
      let chats=[];
      let idc=0;
      for (let  us of response.json().results){
        chats.push({id:idc,title:us.name.first+' '+us.name.last,picture:us.picture.medium,
               lastMessage:{id:1,content:randomWords({ exactly: 5, join: ' ' }),date:new Date() } });
        idc++;
       }
			return chats;
		});
	}
}

/*
	 Generated class for the ChatsPage page.

	 See http://ionicframework.com/docs/v2/components/#navigation for more info on
	 Ionic pages and navigation.
 */
@Component({
	templateUrl: 'build/pages/chats/chats.html',
	providers:[ChatProvider]
})
export class ChatsPage {

	chats:Chat[];

	constructor(private navCtrl: NavController, private chatProvider:ChatProvider ) {
		this.chats=CHATS;

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



