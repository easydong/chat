import { Injectable, Pipe } from '@angular/core';
import { DomSanitizationService } from '@angular/platform-browser';

/*
  Generated class for the SanitizePipe pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
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
