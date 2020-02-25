import { TestBed } from '@angular/core/testing';

import { DesktopCameraService } from './desktop-camera.service';

describe('DesktopCameraService', () => {
  let service: DesktopCameraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesktopCameraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
