import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-typing-effect',
  templateUrl: './typing-effect.component.html',
  styleUrls: ['./typing-effect.component.scss']
})
export class TypingEffectComponent implements OnInit {
  @Input() textToType: string;
  @Input() typingDelay: number;
  
  constructor() { }

  ngOnInit() {
  }

}
