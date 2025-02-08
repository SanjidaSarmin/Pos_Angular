import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPurchaseEditComponent } from './admin-purchase-edit.component';

describe('AdminPurchaseEditComponent', () => {
  let component: AdminPurchaseEditComponent;
  let fixture: ComponentFixture<AdminPurchaseEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPurchaseEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPurchaseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
