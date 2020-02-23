import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Car } from "../models/car.model";

@Injectable({
  providedIn: "root"
})
export class CarService {
  searchResponseSubject = new Subject<Car[]>();
  localUrl = "assets/htresp.json";

  constructor(private http: HttpClient) {}
  search(req: any) {
    return this.http
      .get<Car[]>(this.localUrl)
      .subscribe((resp: Car[]) => this.searchResponseSubject.next(resp));
  }

  getResponse(): Observable<Car[]> {
    return this.searchResponseSubject.asObservable();
  }
}
