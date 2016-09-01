import { Directive ,ElementRef,Renderer} from '@angular/core';

/*
   Directive to set focus, Example 
   html:
   <input type="text" focus />
   Component:
   export class Foo{
    @ViewChild(Focus)
    focusable:Focus;
    ngAfterViewInit(){
      this.focusable.focus();
    }
   }
   
*/
@Directive({
  selector: '[focus]' // Attribute selector
})
export class Focus {

  constructor(private element:ElementRef,private renderer:Renderer) {
  }
  setFocus(){
    // we need a delay in order to work with ionic D:
    setTimeout(()=> this.renderer.invokeElementMethod(this.element.nativeElement.querySelector('input'), 'focus', []),0);
  }
}
