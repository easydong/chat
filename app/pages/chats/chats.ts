import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { NavController } from 'ionic-angular';
import { CHATS } from './mock-chats';
import { MessagesPage, Message } from '../messages/messages';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable }     from 'rxjs/Observable';

declare var  randomWords:any;


export class Chat{
	title: string;
	picture: string;
	lastMessage: Message;
}
@Injectable()
export class ChatProvider {

	private urluser="http://api.randomuser.me/?results=10";
	constructor(private http: Http) {}

  private getUrlQuote(){
    return  "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]="+(Math.floor(Math.random() * 3)+1);
  }
  getMessages(chat:Chat):Observable<Message[]>{
		return this.http.get(this.getUrlQuote())
		.map(response => {
      let messages=[];
      for (let  ms of response.json().results){
        messages.push({content:ms.content,
                    date:  new Date() });
       }
        messages.push(chat.lastMessage);
			return messages;
		});
  
  }
   
	getChats():Observable<Chat[]>{
		return this.http.get(this.urluser)
		.map(response => {
      let chats=[];
      let idc=0;
      for (let  us of response.json().results){
        chats.push({id:idc,title:us.name.first+' '+us.name.last,picture:us.picture.medium,
               lastMessage:{id:1,content:randomWords({ exactly: 5, join: ' ' }),date:new Date() } });
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



