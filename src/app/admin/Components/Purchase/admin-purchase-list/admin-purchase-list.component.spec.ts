import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPurchaseListComponent } from './admin-purchase-list.component';

describe('AdminPurchaseListComponent', () => {
  let component: AdminPurchaseListComponent;
  let fixture: ComponentFixture<AdminPurchaseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPurchaseListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPurchaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
