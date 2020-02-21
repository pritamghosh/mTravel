import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-flight",
  templateUrl: "./flight.component.html",
  styleUrls: ["./flight.component.scss"]
})
export class FlightComponent implements OnInit {
  minDepDate = new Date();
  minRetDate = new Date();
  searchFlightForm: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.searchFlightForm = new FormGroup({
      from: new FormControl(null, Validators.required),
      to: new FormControl(null, Validators.required),
      depDate: new FormControl(new Date(), Validators.required),
      returnDate: new FormControl(),
      adults: new FormControl(1, Validators.pattern("[0-9]{1}")),
      children: new FormControl(0, Validators.pattern("[0-9]{1}")),
      infants: new FormControl(0, Validators.pattern("[0-9]{1}")),
      class_: new FormControl("E", Validators.required)
    });
  }

  onSubmit() {
    console.log(JSON.stringify(this.searchFlightForm.value));
  }
}
