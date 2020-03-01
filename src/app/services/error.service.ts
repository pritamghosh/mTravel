import { ErrorHandler, Injectable, Injector, NgZone } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { MatDialogConfig, MatDialog } from "@angular/material/dialog";
import { AlertComponent } from "../alert/alert.component";
@Injectable()
export class ErrorService implements ErrorHandler {
  handleError(error: HttpErrorResponse) {
    console.log(error);
    if (error.error != null && error.error.message != null) {
      this.ngzone.run(() => {
        this.openDialog(error.error);
      });
    }
  }
  constructor(private injector: Injector, private ngzone: NgZone) {}
  openDialog(error: any): void {
    let dialog: MatDialog = this.injector.get(MatDialog);
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      msg: error.message,
      buttonName: "Ok"
    };

    dialog.open(AlertComponent, dialogConfig);
  }
}
