import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStockAlertComponent } from './admin-stock-alert.component';

describe('AdminStockAlertComponent', () => {
  let component: AdminStockAlertComponent;
  let fixture: ComponentFixture<AdminStockAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStockAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminStockAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
