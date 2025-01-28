import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropSortDialogComponent } from './drag-drop-sort-dialog.component';

describe('DragDropSortDialogComponent', () => {
  let component: DragDropSortDialogComponent;
  let fixture: ComponentFixture<DragDropSortDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragDropSortDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragDropSortDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
