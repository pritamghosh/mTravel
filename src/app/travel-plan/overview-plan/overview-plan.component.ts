import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { TravelService } from "src/app/services/travel.service";
import { Subscription } from "rxjs";
import { FlightPlan } from "src/app/models/flight.plan.model";
import { CarPlan } from "src/app/models/car.plan.model";
import { HotelPlan } from "src/app/models/hotel.plan.model";
import { MatDialogConfig, MatDialog } from "@angular/material/dialog";
import { FaceComponent } from "src/app/face/face.component";
import { TravelPlan } from "src/app/models/travel.plan.model";
import { LoginService } from "src/app/services/login.service";
import { Booking } from "src/app/models/booking.model";
import { InsurancePlan } from "src/app/models/insurance.plan.model";
import { FormGroup } from "@angular/forms";
import { BookingService } from "src/app/services/booking.service";

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
  @Input() bookingResponse: Booking;
  fp: FlightPlan;
  cp: CarPlan;
  hp: HotelPlan;
  ip: InsurancePlan;
  constructor(
    private service: TravelService,
    public dialog: MatDialog,
    private loginService: LoginService,
    private bookingService: BookingService
  ) {}

  ngOnInit(): void {
    if (
      this.bookingResponse != null &&
      this.bookingResponse.travelInfo != null
    ) {
      let tp = JSON.parse(this.bookingResponse.travelInfo);

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
        let booking = new Booking();
        if (this.loginService.getUser() != null) {
          booking.email = this.loginService.getUser().email;
        }
        booking.faceId = dialogConfig.data.faceId;
        booking.flight = this.fp;
        let tp = new TravelPlan();
        tp.flight = this.fp;
        tp.car = this.cp;
        tp.hotel = this.hp;
        booking.travelInfo = JSON.stringify(tp);
        if (this.fp != null) {
          booking.bookings.push({
            partner: this.fp.offerPack.partner,
            amount: this.fp.offerPack.fare.total
          });
        }
        if (this.hp != null) {
          booking.bookings.push({
            partner: this.hp.hotel.partner,
            amount: this.hp.hotel.price
          });
        }
        if (this.ip != null && this.ip.insurance != null) {
          tp.insurance = this.ip.insurance;
          booking.bookings.push({
            partner: this.ip.insurance.vendor,
            amount: this.ip.insurance.price
          });
        }
        if (this.cp != null) {
          booking.bookings.push({
            partner: this.cp.car.partner,
            amount: this.cp.car.price
          });
        }
        console.log(JSON.stringify(booking));
        this.bookingService.book(booking);
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
