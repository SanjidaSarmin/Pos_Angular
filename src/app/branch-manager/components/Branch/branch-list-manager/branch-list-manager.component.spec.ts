import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchListManagerComponent } from './branch-list-manager.component';

describe('BranchListManagerComponent', () => {
  let component: BranchListManagerComponent;
  let fixture: ComponentFixture<BranchListManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchListManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BranchListManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
