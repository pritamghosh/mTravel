import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Hotel } from "../models/hotel.model";

@Injectable({
  providedIn: "root"
})
export class HotelService {
  searchResponseSubject = new Subject<Hotel[]>();
  localUrl = "assets/htresp.json";
  constructor(private http: HttpClient) {}

  search(req: any) {
    return this.http
      .get<Hotel[]>(this.localUrl)
      .subscribe((resp: Hotel[]) => this.searchResponseSubject.next(resp));
  }

  getResponse(): Observable<Hotel[]> {
    return this.searchResponseSubject.asObservable();
  }
}
