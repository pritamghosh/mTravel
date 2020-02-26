import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { TravelService } from "src/app/services/travel.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { FlightPlan } from "src/app/models/flight.plan.model";
import { CarPlan } from "src/app/models/car.plan.model";
import { HotelPlan } from "src/app/models/hotel.plan.model";
import { MatDialogConfig, MatDialog } from "@angular/material/dialog";
import { FaceComponent } from "src/app/face/face.component";
import { TravelPlan } from "src/app/models/travel.plan.model";
import { LoginService } from "src/app/services/login.service";
import { TravelPlanResponse } from "src/app/models/travel.pla.response";

@Component({
  selector: "app-overview-plan",
  templateUrl: "./overview-plan.component.html",
  styleUrls: ["./overview-plan.component.scss"]
})
export class OverviewPlanComponent implements OnInit, OnDestroy {
  step = 0;
  reviewform: FormGroup;
  carSubs: Subscription;
  hotelSubs: Subscription;
  flightSubs: Subscription;
  insuranceSubs: Subscription;
  readonly = false;
  @Input() travelPlanResponse: TravelPlanResponse;
  fp: FlightPlan;
  cp: CarPlan;
  hp: HotelPlan;
  ip: any;
  constructor(
    private service: TravelService,
    public dialog: MatDialog,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    if (
      this.travelPlanResponse != null &&
      this.travelPlanResponse.planString != null
    ) {
      let tp = JSON.parse(this.travelPlanResponse.planString);

      if (tp != null) {
        this.fp = tp.flight;
        this.hp = tp.hotel;
        this.cp = tp.car;
        this.ip = tp.insurance;
        this.readonly = true;
        this.step = 1;
      }
    }
    this.carSubs = this.service.carSubject.asObservable().subscribe(resp => {
      this.cp = resp;
    });
    this.flightSubs = this.service.flightSubject
      .asObservable()
      .subscribe(resp => (this.fp = resp));
    this.hotelSubs = this.service.hotelSubject
      .asObservable()
      .subscribe(resp => (this.hp = resp));
    this.insuranceSubs = this.service.insuranceSubject
      .asObservable()
      .subscribe(resp => (this.ip = resp));
  }

  ngOnDestroy(): void {
    this.carSubs.unsubscribe();
    this.hotelSubs.unsubscribe();
    this.flightSubs.unsubscribe();
    this.insuranceSubs.unsubscribe();
  }
  openFaceIdDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      faceId: "",
      buttonName: "Pay & Flinish"
    };

    const dialogRef = this.dialog.open(FaceComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (!dialogConfig.data.cancelled && dialogConfig.data.faceId != null) {
        let tp = new TravelPlan();
        tp.faceId = dialogConfig.data.faceId;
        tp.flight = this.fp;
        tp.car = this.cp;
        tp.hotel = this.hp;
        tp.insurance = this.ip;
        if (this.loginService.getUser() != null) {
          tp.email = this.loginService.getUser().email;
        }
        console.log(JSON.stringify(tp));
      }
    });
  }
  onSubmit() {
    this.openFaceIdDialog();
  }

  add(index: number) {
    this.service.tabIndex.next(index);
  }
  remove(index: number) {}
}
