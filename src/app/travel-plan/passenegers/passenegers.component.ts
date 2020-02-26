import { Component, OnInit, Input } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormArray,
  Validators,
  FormBuilder
} from "@angular/forms";
import { Travellers } from "src/app/models/travellers.model";
import { Traveller } from "src/app/models/traveller.model";
@Component({
  selector: "app-passenegers",
  templateUrl: "./passenegers.component.html",
  styleUrls: ["./passenegers.component.scss"]
})
export class PassenegersComponent implements OnInit {
  travellersForm: FormGroup;
  arr: FormGroup[];
  @Input("read") isReadOnly = false;
  @Input("travellers") tvlrs: Travellers;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    if (this.tvlrs != null) {
      this.arr = [];
      for (let index = 0; index < this.tvlrs.travellers.length; index++) {
        this.arr.push(this.addPasseneger(this.tvlrs.travellers[index]));
      }

      this.travellersForm = new FormGroup({
        email: new FormControl(this.tvlrs.email),
        contact: new FormControl(this.tvlrs.contact),
        travellers: new FormArray(this.arr)
      });
    } else {
      this.travellersForm = new FormGroup({
        email: new FormControl(Validators.email),
        contact: new FormControl(Validators.pattern("[0-9+\b]{10-15}"))
      });
    }
  }

  addPasseneger(pax: Traveller): FormGroup {
    return new FormGroup({
      firstName: new FormControl(pax.firstName),
      lastName: new FormControl(pax.lastName),
      dateOfBirth: new FormControl(pax.dateOfBirth),
      issuingDate: new FormControl(pax.issuingDate),
      expiaryDate: new FormControl(pax.expiaryDate),
      passportNo: new FormControl(pax.passportNo),
      gender: new FormControl(pax.gender),
      issuingCountry: new FormControl(pax.issuingCountry)
    });
  }

  get travellers(): FormArray {
    return this.travellersForm.get("travellers") as FormArray;
  }
}
