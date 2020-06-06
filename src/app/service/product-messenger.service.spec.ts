import { TestBed } from '@angular/core/testing';

import { ProductMessengerService } from './product-messenger.service';

describe('ProductMessengerService', () => {
  let service: ProductMessengerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductMessengerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
