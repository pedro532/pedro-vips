import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrutosComponent } from './frutos.component';

describe('FrutosComponent', () => {
  let component: FrutosComponent;
  let fixture: ComponentFixture<FrutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
