import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypingDirective } from './directives/typing.directive';
import { TypingEffectComponent } from './typing-effect/typing-effect.component';

@NgModule({
  declarations: [
    TypingDirective,
    TypingEffectComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TypingDirective,
    TypingEffectComponent
  ]
})
export class SharedModule { }
