import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Hotel } from "../models/hotel.model";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class HotelService {
  searchResponseSubject = new Subject<Hotel[]>();
  constructor(private http: HttpClient) {}

  search(req: any) {
    return this.http
      .get<Hotel[]>(environment.hotelSearchUrl)
      .subscribe((resp: Hotel[]) => this.searchResponseSubject.next(resp));
  }

  getResponse(): Observable<Hotel[]> {
    return this.searchResponseSubject.asObservable();
  }
}
