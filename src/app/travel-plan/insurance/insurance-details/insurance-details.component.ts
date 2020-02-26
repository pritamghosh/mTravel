import { Component, OnInit, Input } from "@angular/core";
import { Insurance } from "src/app/models/insurane.model";
import { TravelService } from "src/app/services/travel.service";
import { InsurancePlan } from "src/app/models/insurance.plan.model";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-insurance-details",
  templateUrl: "./insurance-details.component.html",
  styleUrls: ["./insurance-details.component.scss"]
})
export class InsuranceDetailsComponent implements OnInit {
  constructor(private service: TravelService) {}
  @Input() insurance: Insurance;
  @Input("view") isView = false;
  showDetails = false;
  currency = environment.currency;
  ngOnInit(): void {}

  get requestDetails() {
    let str =
      "For " +
      this.insurance.days +
      "Day" +
      (this.insurance.days > 1 ? "s, " : ", ") +
      this.insurance.person +
      "Person" +
      (this.insurance.person > 1 ? "s," : ",");
    return str;
  }

  addToTravelPlan() {
    let ip = new InsurancePlan();
    ip.insurance = this.insurance;
    this.service.pushInsurance(ip);
  }
  get getIcon() {
    return this.showDetails ? "keyboard_arrow_up" : "keyboard_arrow_down";
  }
}
