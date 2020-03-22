import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Expense, ExpenseReport } from "../models/expense.model";
import { environment } from "src/environments/environment";
import { Booking } from "../models/booking.model";
import { LoginService } from "./login.service";
import { AlertService } from "./alert.service";

@Injectable({
  providedIn: "root"
})
export class ExpenseService {
  travelSubject = new Subject<Booking[]>();
  expenseReportSubject = new Subject<ExpenseReport[]>();
  constructor(
    private http: HttpClient,
    private loginService: LoginService,
    private alertService: AlertService
  ) {}

  getTravelPlans() {
    let user = this.loginService.getUser();
    return this.http
      .get<Booking[]>(`${environment.getAllTravelApi}/${user.email}`)
      .subscribe((resp: Booking[]) => this.travelSubject.next(resp));
  }

  save(expense: Expense[]) {
    this.http
      .post(`${environment.coporateBookingApi}/expense`, expense, {
        responseType: "text"
      })
      .subscribe(resp => {
        this.alertService.openDiaolog("Expense has been submitted!");
      });
  }

  getExpenseReport(travelId: number) {
    this.http
      .get<ExpenseReport[]>(
        `${environment.coporateBookingApi}/expense/${travelId}`
      )
      .subscribe(resp => this.expenseReportSubject.next(resp));
  }
}
