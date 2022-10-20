import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertMessageService } from 'src/app/services/alert-message.service';
import { StrapiService } from 'src/app/services/strapi.service';
import { TableRecipesComponent } from 'src/app/table-recipes/table-recipes.component';
import { DialogDataConfirm } from '../Interfaces/DialogDataConfirm';
@Component({
  selector: 'app-confirm-alert',
  templateUrl: './confirm-alert.component.html',
  styleUrls: ['./confirm-alert.component.scss']
})
export class ConfirmAlertComponent {

  @Output() deleteSuccess: EventEmitter<boolean> = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<TableRecipesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataConfirm, private strapiServices: StrapiService, private alertService: AlertMessageService,) { }

  deleteRecipes() {
    //localStorage.removeItem('newRecipes')
    // delete recipe by id
    this.strapiServices.deleteRecipes(this.data.id).subscribe(x => {
      this.dialogRef.close();
      this.deleteSuccess.emit(true);
      this.alertService.alert('success', 'Your Recipe was successfully deleted!')
    }, (err: ErrorEvent) => {
      this.dialogRef.close();
      this.alertService.alert('error', 'Something went wrong. Please try again!')

    })
  }
}

