import {Component, Inject, inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'detalhar-dialog',
  templateUrl: 'detalhar-dialog.component.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatListModule,
  ],
})
export class DetalhareDialogComponet {
  
  matDialogRef = inject(MatDialogRef)

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.matDialogRef.close(true);
  }
}