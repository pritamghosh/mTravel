import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Car } from "../models/car.model";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class CarService {
  searchResponseSubject = new Subject<Car[]>();

  constructor(private http: HttpClient) {}
  search(req: any) {
    return this.http
      .get<Car[]>(environment.carSearchUrl)
      .subscribe((resp: Car[]) => this.searchResponseSubject.next(resp));
  }

  getResponse(): Observable<Car[]> {
    return this.searchResponseSubject.asObservable();
  }
}
