import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { DatePipe } from "@angular/common";
import { BagResponse } from "../models/bag.response.model";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class BagTagService {
  bagServiceApi = environment.bagServiceApi;

  searchResponseSubject = new Subject<any>();
  constructor(private http: HttpClient, private datePipe: DatePipe) {}

  getBagHistory(req: any) {
    const dateOfTravel = this.datePipe.transform(req.travelDate, "ddMMMyyyy");
    this.http
      .get<any>(
        `${this.bagServiceApi}/api/bagtracker/history/${req.bagTagID}/${dateOfTravel}`
      )
      .subscribe(resp => {
        this.searchResponseSubject.next(resp);
      });
  }
}
