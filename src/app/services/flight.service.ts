import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { FlightRequest } from "../models/flight.request.model";
import { OfferPack } from "../models/offer.pack.model";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class FlightService {
  searchResponseSubject = new Subject<OfferPack[]>();
  constructor(private http: HttpClient) {}

  search(flightReqfq: FlightRequest) {
    return this.http
      .post<OfferPack[]>(environment.flightSearchUrl, flightReqfq)
      .subscribe(resp => this.searchResponseSubject.next(resp));
  }

  getResponse(): Observable<OfferPack[]> {
    return this.searchResponseSubject.asObservable();
  }
}
