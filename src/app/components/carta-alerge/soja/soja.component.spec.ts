import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SojaComponent } from './soja.component';

describe('SojaComponent', () => {
  let component: SojaComponent;
  let fixture: ComponentFixture<SojaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SojaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
