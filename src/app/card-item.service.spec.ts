/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CardItemService } from './card-item.service';

describe('CardItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardItemService]
    });
  });

  it('should ...', inject([CardItemService], (service: CardItemService) => {
    expect(service).toBeTruthy();
  }));
});
