import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetadecuentoComponent } from './tarjetadecuento.component';

describe('TarjetadecuentoComponent', () => {
  let component: TarjetadecuentoComponent;
  let fixture: ComponentFixture<TarjetadecuentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetadecuentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetadecuentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
