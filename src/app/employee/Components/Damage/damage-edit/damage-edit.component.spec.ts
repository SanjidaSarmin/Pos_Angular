import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DamageEditComponent } from './damage-edit.component';

describe('DamageEditComponent', () => {
  let component: DamageEditComponent;
  let fixture: ComponentFixture<DamageEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DamageEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DamageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
