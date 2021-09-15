/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListasService } from './listas.service';

describe('Service: Listas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListasService]
    });
  });

  it('should ...', inject([ListasService], (service: ListasService) => {
    expect(service).toBeTruthy();
  }));
});
