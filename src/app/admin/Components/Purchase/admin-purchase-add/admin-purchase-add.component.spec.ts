import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPurchaseAddComponent } from './admin-purchase-add.component';

describe('AdminPurchaseAddComponent', () => {
  let component: AdminPurchaseAddComponent;
  let fixture: ComponentFixture<AdminPurchaseAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPurchaseAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPurchaseAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
