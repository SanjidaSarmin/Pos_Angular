import { TestBed } from '@angular/core/testing';

import { SellItemService } from './sell-item.service';

describe('SellItemService', () => {
  let service: SellItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
