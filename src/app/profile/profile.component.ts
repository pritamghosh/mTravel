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

    return new FormGroup({
      email: new FormControl(user.email, [
        Validators.email,
        Validators.required
      ]),
      firstName: new FormControl(
        user.primaryUser.firstName
      ),
      contact: new FormControl(
        user.contact
      ),
      lastName: new FormControl(user.primaryUser.lastName, Validators.required),
      dateOfBirth: new FormControl(
        user.primaryUser.dateOfBirth
      ),
      issuingDate: new FormControl(
        user.primaryUser.issuingDate
      ),
      expiryDate: new FormControl(
        user.primaryUser.expiryDate
      ),
      passportNo: new FormControl(
        user.primaryUser.passportNo
      ),
      gender: new FormControl(user.primaryUser.gender),
      issuingCountry: new FormControl(
        user.primaryUser.issuingCountry
      )
    });
  }

  onSubmit() {}
  onReset() {
    this.updateForm = this.baseForm;
  }
}
