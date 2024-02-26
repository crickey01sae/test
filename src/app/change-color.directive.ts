import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appChangeColor]',
})
export class ChangeColorDirective implements OnInit {
  constructor(private eleRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {}
  // @HostListener('mouseenter') mouseenter(event: Event) {
  //   this.renderer.setStyle(
  //     this.eleRef.nativeElement,
  //     'background-color',
  //     'pink'
  //   );
  // }
  // @HostListener('mouseleave') mouseleave(event: Event) {
  //   this.renderer.setStyle(
  //     this.eleRef.nativeElement,
  //     'background-color',
  //     'black'
  //   );
  // }
  @Input('appChangeColor') taskStatus: string;

  @HostBinding('style.backgroundColor') get backgroundColor() {
    switch (this.taskStatus) {
      case 'To Do':
        return 'pink';
      case 'In Progress':
        return 'orange';
      case 'Done':
        return 'lightgreen';
      default:
        return 'inherit';
    }
  }
}
