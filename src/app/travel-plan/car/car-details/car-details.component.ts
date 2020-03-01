import { Component, OnInit, Input } from "@angular/core";
import { Car } from "src/app/models/car.model";
import { CarHire } from "src/app/models/car.hire.model";
import { TravelService } from "src/app/services/travel.service";
import { CarPlan } from "src/app/models/car.plan.model";

import { environment } from "src/environments/environment";
import { faUser, faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { LoginService } from "src/app/services/login.service";
import { Travellers } from "src/app/models/travellers.model";

@Component({
  selector: "app-car-details",
  templateUrl: "./car-details.component.html",
  styleUrls: ["./car-details.component.scss"]
})
export class CarDetailsComponent implements OnInit {
  @Input("car") car: Car;
  @Input("request") request: CarHire;
  @Input("view") isView = false;
  showDetails = false;
  currency = environment.currency;
  icon = environment.currencyIcon;
  luggage = faSuitcase;
  passeneger = faUser;
  constructor(
    private service: TravelService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {}

  addToTravelPlan() {
    let cp = new CarPlan();
    let user = this.loginService.getUser();
    if (user != null) {
      let tvs = new Travellers();
      tvs.email = user.email;
      tvs.contact = user.contact;
      tvs.travellers.push(user.primaryUser);
      cp.travellers = tvs;
    }
    cp.car = this.car;
    cp.req = this.request;
    this.service.pushCar(cp);
  }
}
