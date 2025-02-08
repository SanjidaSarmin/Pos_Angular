import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnAddComponent } from './return-add.component';

describe('ReturnAddComponent', () => {
  let component: ReturnAddComponent;
  let fixture: ComponentFixture<ReturnAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
