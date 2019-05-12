import { Directive, OnInit, Input, ElementRef, Renderer2, ContentChild } from '@angular/core';

@Directive({
  selector: '[appTyping]'
})
export class TypingDirective implements OnInit {
  @Input() typingDelay: number;
  @Input() text: string;

  @ContentChild('cursor') private _cursor;
  @ContentChild('typedText') private _typedText;

  private _charIndex = 0;
  cursorElement;
  typedTextElement;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.cursorElement = this._cursor.nativeElement;
    this.typedTextElement = this._typedText.nativeElement;
    this._type();
  }

  _type = () => {
    this.renderer.addClass(this.typedTextElement, 'typed-text');
    this.renderer.addClass(this.cursorElement, 'typed-text');

    if (this._charIndex < this.text.length) {
      if (!this.cursorElement.classList.contains('typing')) {
        this.renderer.addClass(this.cursorElement, 'typing');
      } else {
        this.renderer.removeClass(this.cursorElement, 'typing');
      }
      this.typedTextElement.textContent += this.text.charAt(this._charIndex);
      this._charIndex++;
      setTimeout(this._type, this.typingDelay);
    }
  }
}
