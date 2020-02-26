import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  updateForm: FormGroup;
  maxDob = new Date();
  constructor() {}

  ngOnInit(): void {
    this.updateForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      firstName: new FormControl(null, Validators.required),
      contact: new FormControl(null, Validators.pattern("[0-9+]{8,15}")),
      lastName: new FormControl(null, Validators.required),
      dateOfBirth: new FormControl(null, Validators.required),
      issuingDate: new FormControl(null, Validators.required),
      expiaryDate: new FormControl(null, Validators.required),
      passportNo: new FormControl(null, Validators.required),
      gender: new FormControl(null, Validators.required),
      issuingCountry: new FormControl(null, Validators.required),
      faceId: new FormControl()
    });
  }

  onSubmit() {}
  onReset() {}
}
