import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSupplierListComponent } from './admin-supplier-list.component';

describe('AdminSupplierListComponent', () => {
  let component: AdminSupplierListComponent;
  let fixture: ComponentFixture<AdminSupplierListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSupplierListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSupplierListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
