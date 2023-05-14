import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescuempleadoComponent } from './descuempleado.component';

describe('DescuempleadoComponent', () => {
  let component: DescuempleadoComponent;
  let fixture: ComponentFixture<DescuempleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescuempleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescuempleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
