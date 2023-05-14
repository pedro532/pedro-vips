import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InforeservaComponent } from './inforeserva.component';

describe('InforeservaComponent', () => {
  let component: InforeservaComponent;
  let fixture: ComponentFixture<InforeservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InforeservaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InforeservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
