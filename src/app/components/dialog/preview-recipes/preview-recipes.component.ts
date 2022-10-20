import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TableRecipesComponent } from '../../table-recipes/table-recipes.component';
import { ConfirmAlertComponent } from '../confirm-alert/confirm-alert.component';
import { DialogDataPreview } from '../Interfaces/DialogDataPreview'
@Component({
  selector: 'app-preview-recipes',
  templateUrl: './preview-recipes.component.html',
  styleUrls: ['./preview-recipes.component.scss']
})
export class PreviewRecipesComponent {

  allDetailsRecipe: any;
  ingredients: any;
  @Output() deleteSuccess: EventEmitter<boolean> = new EventEmitter();
  constructor(
    public dialogRef: MatDialogRef<TableRecipesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataPreview,
    public dialog: MatDialog) {
    //get all reipe details
    this.allDetailsRecipe = data.recipeDetail;
    this.ingredients = this.allDetailsRecipe.recipes
  }
  //dialog for deleting recipe
  openDialogConfirm(): void {
    const dialogRef = this.dialog.open(ConfirmAlertComponent, {
      width: '360px',
      height: '250px',
      data: { id: this.allDetailsRecipe.id },
      backdropClass: 'backdropBackground'
    });
    dialogRef.componentInstance.deleteSuccess.subscribe((data) => {
      if (data === true) {
        this.deleteSuccess.emit(true)
        this.dialogRef.close();
      }
    });
  }
}

