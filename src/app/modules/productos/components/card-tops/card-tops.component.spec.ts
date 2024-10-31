import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTopsComponent } from './card-tops.component';

describe('CardTopsComponent', () => {
  let component: CardTopsComponent;
  let fixture: ComponentFixture<CardTopsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardTopsComponent]
    });
    fixture = TestBed.createComponent(CardTopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
