import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { FaceComponent } from "../face/face.component";
import { MatDialogConfig, MatDialog } from "@angular/material/dialog";
import { RegistrationService } from "../services/registration.service";
import { BusyDisplayService } from "../services/busy-display.service";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"]
})
export class RegistrationComponent implements OnInit {
  maxDob = new Date();
  registrationForm: FormGroup;
  constructor(
    public dialog: MatDialog,
    private registrationService: RegistrationService,
    private busyDisplayService: BusyDisplayService
  ) {}

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      contact: new FormControl(null),
      password: new FormControl(null, [
        Validators.required,
        this.password.bind(this)
      ]),
      cpassword: new FormControl(null, [
        Validators.required,
        this.password.bind(this)
      ]),
      faceId: new FormControl(),
      primaryUser: this.userFormControl()
    });
  }
  userFormControl() {
    return new FormGroup({
      firstName: new FormControl(null),
      lastName: new FormControl(null, Validators.required),
      dateOfBirth: new FormControl(null),
      issuingDate: new FormControl(null),
      expiryDate: new FormControl(null),
      passportNo: new FormControl(null),
      gender: new FormControl(null),
      issuingCountry: new FormControl(null)
    });
  }
  password(control: FormControl) {
    if (this.registrationForm != null) {
      if (
        this.registrationForm.get("password").value !=
        this.registrationForm.get("cpassword").value
      ) {
        this.registrationForm.get("password").setErrors({ mustMatch: true });
        this.registrationForm.get("password").setErrors({ mustMatch: true });
      } else {
        this.registrationForm.get("password").setErrors(null);
        this.registrationForm.get("password").setErrors(null);
      }
    }
    return null;
  }
  openFaceIdDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      faceId: "",
      buttonName: "Register"
    };

    const dialogRef = this.dialog.open(FaceComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (!dialogConfig.data.cancelled && dialogConfig.data.faceId != null) {
        this.registrationForm.get("faceId").setValue(dialogConfig.data.faceId);
        this.busyDisplayService.showBusyDisplay(true);
        this.registrationService.rigister(this.registrationForm.value);
      }
    });
  }

  onReset() {
    this.registrationForm.reset();
  }

  onSubmit() {
    this.openFaceIdDialog();
  }
}
