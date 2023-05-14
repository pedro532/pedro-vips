import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaAlergeComponent } from './carta-alerge.component';

describe('CartaAlergeComponent', () => {
  let component: CartaAlergeComponent;
  let fixture: ComponentFixture<CartaAlergeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaAlergeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaAlergeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
