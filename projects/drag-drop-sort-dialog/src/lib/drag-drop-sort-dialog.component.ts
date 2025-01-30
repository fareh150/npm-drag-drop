import { Component, Inject, signal, WritableSignal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { CdkDragDrop, moveItemInArray, CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';

type SortableItem = Record<string, any>;

@Component({
  selector: 'lib-drag-drop-sort-dialog',
  imports: [
    MatIcon,
    CdkDrag,
    CdkDropList,
  ],
  templateUrl: './drag-drop-sort-dialog.component.html',
  styles: ``
})
export class DragDropSortDialogComponent {
    sortableData: WritableSignal<SortableItem[]> = signal([]);
    initialData: WritableSignal<SortableItem[]> = signal([]);
    modifiedData: WritableSignal<SortableItem[]> = signal([]);
    displayKey: WritableSignal<string> = signal('');
    orderKey: WritableSignal<string> = signal('');

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: {
            sortableData: SortableItem[],
            displayKey: string,
            orderKey: string,
        },
        private readonly dialogRef: MatDialogRef<DragDropSortDialogComponent>,
    ) {
        this.modifiedData.set(this.sortByOrderKey(data.sortableData, data.orderKey));
        this.sortableData.set(this.modifiedData());
        this.initialData.set(this.modifiedData());
        this.displayKey.set(data.displayKey);
        this.orderKey.set(data.orderKey);
    }

    private sortByOrderKey(data: SortableItem[], orderKey: string): SortableItem[] {
        return [...data].sort((a, b) => {
            if (a[orderKey] < b[orderKey]) {
                return -1;
            }
            if (a[orderKey] > b[orderKey]) {
                return 1;
            }
            return 0;
        });
    }

    drop(event: CdkDragDrop<SortableItem[]>): void {
        moveItemInArray(this.sortableData(), event.previousIndex, event.currentIndex);

        this.sortableData.set(this.sortableData().map((item, index) => {
            return {
                ...item,
                [this.orderKey()]: index + 1,
            };
        }));
    }

    async saveData(): Promise<void> {
        const changedItems = this.sortableData().filter((modifiedItem, index) => {
            const initialItem = this.initialData().find(item => item[this.displayKey()] === modifiedItem[this.displayKey()]);
            return initialItem && initialItem[this.orderKey()] !== modifiedItem[this.orderKey()];
        });

        this.closeSortDialog(changedItems.length > 0 ? changedItems : undefined);
    }

    closeSortDialog(changedData?: SortableItem[]): void {
        this.dialogRef.close(changedData);
    }
}
