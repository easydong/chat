import { Injectable } from '@angular/core';
import { Http,URLSearchParams,Headers} from '@angular/http';
import { Observable }     from 'rxjs/Rx';

@Injectable()
export class CleverbotService {

  key={user:"",key:""};
  private urlbase="https://cleverbot.io/1.0/"

  constructor(private http: Http) {}

  ask(nick:string='',question:string){
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let params= new URLSearchParams();
    params.set('user',this.key.user);
    params.set('key',this.key.key);
    params.set('nick',nick);
    
    let create=this.http.post(this.urlbase+'create',params).map((response) => response.json());
    params.set('text',question);
    let ask=this.http.post(this.urlbase+'ask',params).map((response) => response.json());
    return Observable.combineLatest(create,ask,(rc,ra)=>{
      return ra.response;
    });
  }
}

