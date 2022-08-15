import { TestBed } from '@angular/core/testing';

import { DataColorService } from './data-color.service';

describe('DataColorService', () => {
  let service: DataColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
