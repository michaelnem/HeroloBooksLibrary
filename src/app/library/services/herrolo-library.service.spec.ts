import { TestBed, inject } from '@angular/core/testing';

import { HerroloLibraryService } from './herrolo-library.service';

describe('HerroloLibraryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HerroloLibraryService]
    });
  });

  it('should be created', inject([HerroloLibraryService], (service: HerroloLibraryService) => {
    expect(service).toBeTruthy();
  }));
});
