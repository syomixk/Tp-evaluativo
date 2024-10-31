import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBolsaComponent } from './card-bolsa.component';

describe('CardBolsaComponent', () => {
  let component: CardBolsaComponent;
  let fixture: ComponentFixture<CardBolsaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardBolsaComponent]
    });
    fixture = TestBed.createComponent(CardBolsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
