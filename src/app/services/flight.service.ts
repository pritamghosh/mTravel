import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { FlightItinerary } from "../models/flight.itinerary.model";

@Injectable({
  providedIn: "root"
})
export class FlightService {
  searchResponseSubject = new Subject<FlightItinerary[]>();
  localUrl = "assets/fresp.json";
  constructor(private http: HttpClient) {}

  searchFlight() {
    return this.http
      .get<FlightItinerary[]>(this.localUrl)
      .subscribe((resp: FlightItinerary[]) =>
        this.searchResponseSubject.next(resp)
      );
  }

  getFlightResponse(): Observable<FlightItinerary[]> {
    return this.searchResponseSubject.asObservable();
  }
}
