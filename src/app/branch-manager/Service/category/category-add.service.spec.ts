import { TestBed } from '@angular/core/testing';

import { CategoryAddService } from './category-add.service';

describe('CategoryAddService', () => {
  let service: CategoryAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
