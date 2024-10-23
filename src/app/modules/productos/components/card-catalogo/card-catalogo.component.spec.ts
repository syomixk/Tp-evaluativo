import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCatalogoComponent } from './card-catalogo.component';

describe('CardCatalogoComponent', () => {
  let component: CardCatalogoComponent;
  let fixture: ComponentFixture<CardCatalogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardCatalogoComponent]
    });
    fixture = TestBed.createComponent(CardCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
