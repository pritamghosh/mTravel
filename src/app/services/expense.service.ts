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
    return new Promise(resolve => {
      this.http
        .post(`${environment.coporateBookingApi}/expense`, expense, {
          responseType: "text"
        })
        .subscribe(resp => {
          const dialog = this.alertService.openDiaolog(
            "Expense has been submitted!"
          );
          dialog.afterClosed().subscribe(() => resolve());
        });
    });
  }

  private getTime(date?: Date) {
    return date != null ? date.getTime() : 0;
  }

  getExpenseReport(travelId: number) {
    this.http
      .get<ExpenseReport[]>(
        `${environment.coporateBookingApi}/expense/${travelId}`
      )
      .subscribe(resp => {
        //resp.sort((o1, o2) => this.getTime(o1.date) - this.getTime(o2.date));
        this.expenseReportSubject.next(resp);
      });
  }
}
