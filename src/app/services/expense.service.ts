import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Expense } from "../models/expense.model";
import { environment } from "src/environments/environment";
import { Booking } from "../models/booking.model";
import { LoginService } from "./login.service";
import { AlertService } from "./alert.service";

@Injectable({
  providedIn: "root"
})
export class ExpenseService {
  travelSubject = new Subject<Booking[]>();
  constructor(
    private http: HttpClient,
    private loginService: LoginService,
    private alertService: AlertService
  ) {}

  getTravelPlans() {
    let user = this.loginService.getUser();
    return this.http
      .get<Booking[]>(`${environment.getAllTravelApi}/expense`)
      .subscribe((resp: Booking[]) => this.travelSubject.next(resp));
  }

  save(expense: Expense[]) {
    this.http
      .post<any>(`${environment.coporateBookingApi}/expense`, expense)
      .subscribe(
        resp => {
          console.log(resp);
          this.alertService.openDiaolog("Expense has been submitted!");
        },
        err => {
          console.error(err);
        }
      );
    console.log(expense);
  }

  getInvoiceInfo(file: File): Promise<any> {
    return new Promise((resolve, reject) => {
      let formData = new FormData();
      formData.append("file", file);
      formData.append("expense", file);
      this.http
        .post<any>(`${environment.coporateBookingApi}/expense`, formData)
        .subscribe(
          resp => {
            console.log(resp);
            resolve(resp);
          },
          err => {
            console.error(err);

            //reject(err);
          }
        );
    });
  }
}
