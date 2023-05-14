import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetadecuentotresComponent } from './tarjetadecuentotres.component';

describe('TarjetadecuentotresComponent', () => {
  let component: TarjetadecuentotresComponent;
  let fixture: ComponentFixture<TarjetadecuentotresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetadecuentotresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetadecuentotresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
