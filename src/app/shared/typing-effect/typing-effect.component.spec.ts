import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingEffectComponent } from './typing-effect.component';

describe('TypingEffectComponent', () => {
  let component: TypingEffectComponent;
  let fixture: ComponentFixture<TypingEffectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypingEffectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypingEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
