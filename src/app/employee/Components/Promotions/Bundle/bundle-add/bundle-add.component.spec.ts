import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BundleAddComponent } from './bundle-add.component';

describe('BundleAddComponent', () => {
  let component: BundleAddComponent;
  let fixture: ComponentFixture<BundleAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BundleAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BundleAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
