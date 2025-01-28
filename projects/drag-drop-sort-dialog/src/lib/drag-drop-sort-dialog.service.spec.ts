import { TestBed } from '@angular/core/testing';

import { DragDropSortDialogService } from './drag-drop-sort-dialog.service';

describe('DragDropSortDialogService', () => {
  let service: DragDropSortDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DragDropSortDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
