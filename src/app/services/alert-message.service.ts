import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
export type AlertType = 'error' | 'success' | 'info';
@Injectable({
  providedIn: 'root'
})
export class AlertMessageService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private _snackBar: MatSnackBar) { }

  async alert(type: AlertType, message: string): Promise<void> {
    const toast = this._snackBar.open(message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 5000,
      panelClass: type
    });
  }
}
