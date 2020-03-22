import { ErrorHandler, Injectable, Injector, NgZone } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { MatDialogConfig, MatDialog } from "@angular/material/dialog";
import { AlertComponent } from "../alert/alert.component";
import { BusyDisplayService } from "./busy-display.service";
@Injectable()
export class ErrorService implements ErrorHandler {
  handleError(error: HttpErrorResponse) {
    console.error(error);
    this.ngzone.run(() => {
      this.busyDisplayService.showBusyDisplay(false);
    });
    if (error.error != null && error.error.message != null) {
      this.ngzone.run(() => {
        this.openDialog(error.error);
      });
    }
  }
  constructor(
    private injector: Injector,
    private ngzone: NgZone,
    private busyDisplayService: BusyDisplayService
  ) {}
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
