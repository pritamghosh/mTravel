import { Injectable } from "@angular/core";
import { TravelPlanResponse } from "../models/travel.pla.response";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Expense } from "../models/expense.model";

@Injectable({
  providedIn: "root"
})
export class ExpenseService {
  localUrl = "assets/trresp.json";
  travelSubject = new Subject<TravelPlanResponse[]>();
  constructor(private http: HttpClient) {}

  getTravelPlans() {
    return this.http
      .get<TravelPlanResponse[]>(this.localUrl)
      .subscribe((resp: TravelPlanResponse[]) => this.travelSubject.next(resp));
  }

  save(expense: Expense[]) {
    console.log(expense);
  }
}
