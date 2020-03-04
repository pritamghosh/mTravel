import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { LoginService } from "../services/login.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  updateForm: FormGroup;
  maxDob = new Date();
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.updateForm = this.baseForm;
  }

  get baseForm() {
    let user = this.loginService.getUser();
    console.log(user.primaryUser.expiryDate);

    return new FormGroup({
      email: new FormControl(user.email, [
        Validators.email,
        Validators.required
      ]),
      firstName: new FormControl(
        user.primaryUser.firstName,
        Validators.required
      ),
      contact: new FormControl(
        user.contact,
        Validators.pattern("[0-9+]{8,15}")
      ),
      lastName: new FormControl(user.primaryUser.lastName, Validators.required),
      dateOfBirth: new FormControl(
        user.primaryUser.dateOfBirth,
        Validators.required
      ),
      issuingDate: new FormControl(
        user.primaryUser.issuingDate,
        Validators.required
      ),
      expiryDate: new FormControl(
        user.primaryUser.expiryDate,
        Validators.required
      ),
      passportNo: new FormControl(
        user.primaryUser.passportNo,
        Validators.required
      ),
      gender: new FormControl(user.primaryUser.gender, Validators.required),
      issuingCountry: new FormControl(
        user.primaryUser.issuingCountry,
        Validators.required
      )
    });
  }

  onSubmit() {}
  onReset() {
    this.updateForm = this.baseForm;
  }
}
