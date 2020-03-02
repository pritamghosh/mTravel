import { Component, OnInit, Input } from "@angular/core";
import { Insurance } from "src/app/models/insurane.model";
import { TravelService } from "src/app/services/travel.service";
import { InsurancePlan } from "src/app/models/insurance.plan.model";
import { environment } from "src/environments/environment";
import { Travellers } from "src/app/models/travellers.model";
import { LoginService } from "src/app/services/login.service";

@Component({
  selector: "app-insurance-details",
  templateUrl: "./insurance-details.component.html",
  styleUrls: ["./insurance-details.component.scss"]
})
export class InsuranceDetailsComponent implements OnInit {
  constructor(
    private service: TravelService,
    private loginService: LoginService
  ) {}
  @Input() insurance: Insurance;
  @Input("view") isView = false;
  showDetails = false;
  currency = environment.currency;
  icon = environment.currencyIcon;
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
    let user = this.loginService.getUser();
    if (user != null) {
      let tvs = new Travellers();
      tvs.email = user.email;
      tvs.contact = user.contact;
      tvs.travellers.push(user.primaryUser);
      ip.travellers = tvs;
    }
    ip.insurance = this.insurance;
    this.service.pushInsurance(ip);
    this.service.tabIndex.next(4);
  }
  get getIcon() {
    return this.showDetails ? "keyboard_arrow_up" : "keyboard_arrow_down";
  }
}
