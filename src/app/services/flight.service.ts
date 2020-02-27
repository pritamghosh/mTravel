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
    return this.http.get<OfferPack[]>(environment.flightSearchUrl).subscribe(
      resp => this.searchResponseSubject.next(resp),
      err => {
        console.log(err);
      }
    );
  }

  getResponse(): Observable<OfferPack[]> {
    return this.searchResponseSubject.asObservable();
  }
}
