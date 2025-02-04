import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeBranchListComponent } from './employee-branch-list.component';

describe('EmployeeBranchListComponent', () => {
  let component: EmployeeBranchListComponent;
  let fixture: ComponentFixture<EmployeeBranchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeBranchListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeBranchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
