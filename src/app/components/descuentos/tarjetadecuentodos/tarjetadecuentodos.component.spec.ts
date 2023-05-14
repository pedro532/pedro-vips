import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetadecuentodosComponent } from './tarjetadecuentodos.component';

describe('TarjetadecuentodosComponent', () => {
  let component: TarjetadecuentodosComponent;
  let fixture: ComponentFixture<TarjetadecuentodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetadecuentodosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetadecuentodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
