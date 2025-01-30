import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DragDropSortDialogComponent } from 'drag-drop-sort-dialog';

@Component({
  selector: 'app-root',
  imports: [DragDropSortDialogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'drag-drop-sort-dialog-testbed-app';

  items =  [
    {
      sort: 1,
      name: 'item 1'
    },
    {
      sort: 2,
      name: 'item 2'
    },
    {
      sort: 3,
      name: 'item 3'
    },
    {
      sort: 4,
      name: 'item 4'
    },
    {
      sort: 5,
      name: 'item 5'
    },
    {
      sort: 6,
      name: 'item 6'
    },
    {
      sort: 7,
      name: 'item 7'
    },
    {
      sort: 8,
      name: 'item 8'
    },
    {
      sort: 9,
      name: 'item 9'
    },
    {
      sort: 10,
      name: 'item 10'
    }
  ]

  constructor(public dialog: MatDialog) {}


  openDialog() {
    this.dialog.open(DragDropSortDialogComponent, {
         width: '30vw',
         maxWidth: '30vw',
         minWidth: '240px',
         maxHeight: '90vh',
         autoFocus: false,
         data: {
           sortableData: this.items,
           displayKey: 'name',
           orderKey: 'sort'
         },
       })
  }
}
