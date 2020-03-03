import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Expense } from "../models/expense.model";
import { environment } from "src/environments/environment";
import { Booking } from "../models/booking.model";
import { LoginService } from "./login.service";

@Injectable({
  providedIn: "root"
})
export class ExpenseService {
  travelSubject = new Subject<Booking[]>();
  constructor(private http: HttpClient, private loginService: LoginService) {}

  getTravelPlans() {
    let user = this.loginService.getUser();
    return this.http
      .get<Booking[]>(`${environment.getAllTravelApi}/${user.email}`)
      .subscribe((resp: Booking[]) => this.travelSubject.next(resp));
  }

  save(expense: Expense[]) {
    console.log(expense);
  }
}
