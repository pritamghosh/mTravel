import { Component, OnInit, Input } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormArray,
  Validators,
  FormBuilder
} from "@angular/forms";
import { Traveller } from "src/app/models/traveller.model";
@Component({
  selector: "app-passenger",
  templateUrl: "./passenger.component.html",
  styleUrls: ["./passenger.component.scss"]
})
export class PassengerComponent implements OnInit {
  maxDob = new Date();
  @Input() paxForm: FormGroup;
  constructor() {}
  @Input("diabled") isdisabled = true;
  ngOnInit(): void {}
}
