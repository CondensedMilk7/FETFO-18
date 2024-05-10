import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]', // <element appHighlight />
  standalone: true,
})
export class HighlightDirective {
  @Input() highlightColor: "blue" | "green" | "yellow" = "yellow";

  constructor(private elementRef: ElementRef) {
    console.log("HighlightDirective works");
  }

  @HostListener("mouseover")
  onMouseOver() {
    this.elementRef.nativeElement.style.color = this.highlightColor;
  }

  @HostListener("mouseout")
  onMouseOut() {
    this.elementRef.nativeElement.style.color = "initial";
  }
}
