import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { FaceComponent } from "../face/face.component";
import { MatDialogConfig, MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"]
})
export class RegistrationComponent implements OnInit {
  maxDob = new Date();
  registrationForm: FormGroup;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      dateOfBirth: new FormControl(null, Validators.required),
      issuingDate: new FormControl(null, Validators.required),
      expiaryDate: new FormControl(null, Validators.required),
      passportNo: new FormControl(null, Validators.required),
      gender: new FormControl(null, Validators.required),
      issuingCountry: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.email, Validators.required]),
      contact: new FormControl(null, Validators.pattern("[0-9+]{8,15}")),
      password: new FormControl(null, [
        Validators.required,
        this.password.bind(this)
      ]),
      cpassword: new FormControl(null, [
        Validators.required,
        this.password.bind(this)
      ]),
      faceId: new FormControl()
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
      buttonName: "Registration"
    };

    const dialogRef = this.dialog.open(FaceComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (!dialogConfig.data.cancelled && dialogConfig.data.faceId != null) {
        this.registrationForm.get("faceId").setValue(dialogConfig.data.faceId);
        console.log(JSON.stringify(this.registrationForm.value));

        //this.onSubmit();
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