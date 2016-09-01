import { Component ,ElementRef, Input,ViewChild } from '@angular/core';
import { NavController,NavParams , Scroll} from 'ionic-angular';
import { DatePipe } from '@angular/common';
import { ChatProvider,Message,Chat } from '../../providers/chat/chat';
import { SanitizePipe } from '../../pipes/sanitizePipe';
import { Focus } from '../../components/focus/focus';
import {Keyboard} from 'ionic-native';




@Component({
  templateUrl: 'build/pages/messages/messages.html',
  providers:[ChatProvider],
  pipes: [SanitizePipe],
  directives:[Focus]
})
export class MessagesPage {
  activeChat:Chat;
  messages:Message[];
  observer:MutationObserver;
  @ViewChild('msgContent')
  msgContent:any;
  @ViewChild(Focus)
  msgInput:Focus;


  @Input()
  currentMessage:Message=new Message();

  constructor(private navCtrl: NavController, private params: NavParams, private chatProvider:ChatProvider) {
    this.activeChat=params.get('chat');

  }

  ngOnInit(){
    this.chatProvider.getMessages(this.activeChat).subscribe(msgs=>this.messages=msgs );
    this.observer=new MutationObserver(mutations=>{
      let last:any=mutations[mutations.length-1].target;
      last.scrollIntoView();
    });
    this.observer.observe(this.msgContent.elementRef.nativeElement,{ childList:true, subtree: true });
  }

  ngOnDestroy(){
    this.observer.disconnect();
  }
  send(keyKode:KeyboardEvent=undefined){
    if (keyKode==undefined ||  keyKode.charCode==13){
      this.currentMessage.createdAt=new Date();
      this.currentMessage.isMine=true;
      this.messages.push(this.currentMessage);
      let clon=Object.create(this.currentMessage);
      this.chatProvider.sendMesssage(clon,this.activeChat).subscribe(msg =>{
        this.messages.push(msg);
      });	
      this.currentMessage=new Message();
      this.msgInput.setFocus();
      Keyboard.show();
    }
  }
}
