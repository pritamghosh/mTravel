import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"]
})
export class RegistrationComponent implements OnInit {
  maxDob = new Date();
  registrationForm: FormGroup;
  constructor() {}

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
      contact: new FormControl(null, Validators.pattern("[0-9+\b]{10-15}")),
      password: new FormControl(null, [
        Validators.required,
        this.password.bind(this)
      ]),
      cpassword: new FormControl(null, [
        Validators.required,
        this.password.bind(this)
      ])
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
  onSubmit() {}
}
