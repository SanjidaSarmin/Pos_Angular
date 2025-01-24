import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcodeCreateComponent } from './barcode-create.component';

describe('BarcodeCreateComponent', () => {
  let component: BarcodeCreateComponent;
  let fixture: ComponentFixture<BarcodeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarcodeCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarcodeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
