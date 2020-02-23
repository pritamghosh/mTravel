import { Injectable } from "@angular/core";

import { Subject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { FlightPlan } from "../models/flight.plan.model";
import { CarPlan } from "../models/car.plan.model";
import { HotelPlan } from "../models/hotel.plan.model";
import { InsurancePlan } from "../models/insurance.plan.model";
@Injectable({
  providedIn: "root"
})
export class TravelService {
  constructor(private http: HttpClient) {}
  flightSubject = new Subject<FlightPlan>();
  carSubject = new Subject<CarPlan>();
  hotelSubject = new Subject<HotelPlan>();
  insuranceSubject = new Subject<InsurancePlan>();
  pushFlight(fp: FlightPlan) {
    this.flightSubject.next(fp);
  }
  pushCar(cp: CarPlan) {
    this.carSubject.next(cp);
  }
  pushHotel(hp: HotelPlan) {
    this.hotelSubject.next(hp);
  }
  pushInsurance(ip: InsurancePlan) {
    this.insuranceSubject.next(ip);
  }
}
