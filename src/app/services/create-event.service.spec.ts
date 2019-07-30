import { TestBed } from '@angular/core/testing';

import { CreateEventService } from './create-event.service';

describe('CreateEventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateEventService = TestBed.get(CreateEventService);
    expect(service).toBeTruthy();
  });
});
