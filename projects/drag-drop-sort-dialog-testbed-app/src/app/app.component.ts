import { Component } from '@angular/core';

import { DragDropSortDialogComponent } from 'drag-drop-sort-dialog';

@Component({
  selector: 'app-root',
  imports: [
    DragDropSortDialogComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'drag-drop-sort-dialog-testbed-app';
}
