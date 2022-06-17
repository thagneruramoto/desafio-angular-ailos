import { TestBed } from '@angular/core/testing';

import { CooperadoService } from './cooperado.service';

describe('CooperadoService', () => {
  let service: CooperadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CooperadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
