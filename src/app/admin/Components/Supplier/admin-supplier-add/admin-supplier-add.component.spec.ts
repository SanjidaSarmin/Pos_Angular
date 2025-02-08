import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSupplierAddComponent } from './admin-supplier-add.component';

describe('AdminSupplierAddComponent', () => {
  let component: AdminSupplierAddComponent;
  let fixture: ComponentFixture<AdminSupplierAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSupplierAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSupplierAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
