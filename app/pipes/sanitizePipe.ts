import { Injectable, Pipe } from '@angular/core';
import { DomSanitizationService } from '@angular/platform-browser';

/*
   Pipe to by pass the security sanityzer of angunlar
*/
@Pipe({
  name: 'sanitizePipe'
})
@Injectable()
export class SanitizePipe {

  constructor(private _sanitizer: DomSanitizationService){}  

  transform(value: string, args: any[]) {
    value = value + ''; // make sure it's a string

    return this._sanitizer.bypassSecurityTrustHtml(value);
  }
}
