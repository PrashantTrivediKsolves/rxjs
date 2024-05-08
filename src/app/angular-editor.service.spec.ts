import { TestBed } from '@angular/core/testing';

import { AngularEditorService } from './angular-editor.service';

describe('AngularEditorService', () => {
  let service: AngularEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
