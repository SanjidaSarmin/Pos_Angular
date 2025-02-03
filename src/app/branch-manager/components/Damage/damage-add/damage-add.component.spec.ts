import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DamageAddComponent } from './damage-add.component';

describe('DamageAddComponent', () => {
  let component: DamageAddComponent;
  let fixture: ComponentFixture<DamageAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DamageAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DamageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
