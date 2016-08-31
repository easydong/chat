import { Component ,ElementRef, Input,ViewChild } from '@angular/core';
import { NavController,NavParams , Scroll} from 'ionic-angular';
import { DatePipe } from '@angular/common';
import { ChatProvider,Message,Chat } from '../../providers/chat/chat';
import { SanitizePipe } from '../../pipes/sanitizePipe';




@Component({
  templateUrl: 'build/pages/messages/messages.html',
  providers:[ChatProvider],
  pipes: [SanitizePipe],
})
export class MessagesPage {
  activeChat:Chat;
  messages:Message[];
  observer:MutationObserver;
  @ViewChild('msgContent')
  msgContent:any;

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
  send(keyKode:KeyboardEvent){
    if (keyKode.charCode==13){
      this.currentMessage.createdAt=new Date();
      this.currentMessage.isMine=true;
      this.messages.push(this.currentMessage);
      this.chatProvider.sendMesssage(this.currentMessage,this.activeChat).subscribe(msg =>{
        this.currentMessage=new Message();
        this.messages.push(msg);
      });	
    }
  }

}
