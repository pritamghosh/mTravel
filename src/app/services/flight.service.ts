import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { FlightRequest } from "../models/flight.request.model";
import { OfferPack } from "../models/offer.pack.model";

@Injectable({
  providedIn: "root"
})
export class FlightService {
  searchResponseSubject = new Subject<OfferPack[]>();
  localUrl = "assets/fresp.json";
  constructor(private http: HttpClient) {}

  search(flightReqfq: FlightRequest) {
    return this.http
      .get<OfferPack[]>(this.localUrl)
      .subscribe((resp: OfferPack[]) => this.searchResponseSubject.next(resp));
  }

  getResponse(): Observable<OfferPack[]> {
    return this.searchResponseSubject.asObservable();
  }
}
