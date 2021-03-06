import { Injectable,Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable }     from 'rxjs/Observable';
import { CleverbotService  } from '../cleverbot/cleverbot'

/*
 * To use some regular Javascript in Typescript
 */
declare var  randomWords:any;

export class Chat{
	title: string;
	picture: string;
	lastMessage: Message;
}

export class Message{
  content:string;
  createdAt: Date;
  isMine: boolean;
}
/*
   Data provider for the Chat application
*/
@Injectable()
export class ChatProvider {

	private urluser="http://api.randomuser.me/?results=10";
	constructor(private http: Http,  private cleverbot:CleverbotService) {
    //api keys the cleverbot api, this are just for example
    // to get new ones go to https://cleverbot.io/keys
    this.cleverbot.key={user:"TfIxXerlZ9H7X2oM", key:"ryXfNBURqgBDdSFYwvHUdalj2grhClRX"}
	}

  private getUrlQuote(){
    return  "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]="+(Math.floor(Math.random() * 4)+1);
  }

  getMessages(chat:Chat):Observable<Message[]>{
		return this.http.get(this.getUrlQuote())
		.map(response => {
      let messages=[];
      for (let  ms of response.json()){
        messages.push({content:ms.content, createdAt:  this.randomDate(), isMine: false });
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
        let twoDaysAgo=new Date();
        twoDaysAgo.setDate(twoDaysAgo.getDate()-2 );
        chats.push({id:idc,title:us.name.first+' '+us.name.last,picture:us.picture.medium,
               lastMessage:{id:1,content:randomWords({ exactly: 5, join: ' ' }),createdAt:this.randomDate(twoDaysAgo),isMine:false } });
       }
			return chats;
		});
	}

  sendMesssage(msg:Message,chat:Chat):Observable<Message>{
    return this.cleverbot.ask(chat.title,msg.content).map(response=>{
      return {content:response,createdAt:new Date(),isMine:false};
    });
  }

  private randomDate(start:Date=new Date(2015,1,1)):Date {
        return new Date(start.getTime() + Math.random() * (new Date().getTime() - start.getTime()));
  }
}

