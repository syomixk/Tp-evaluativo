import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardJeansComponent } from './card-jeans.component';

describe('CardJeansComponent', () => {
  let component: CardJeansComponent;
  let fixture: ComponentFixture<CardJeansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardJeansComponent]
    });
    fixture = TestBed.createComponent(CardJeansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
