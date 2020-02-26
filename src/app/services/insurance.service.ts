import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Insurance } from "../models/insurane.model";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class InsuranceService {
  searchResponseSubject = new Subject<Insurance[]>();

  constructor(private http: HttpClient) {}
  search(req: any) {
    return this.http
      .get<Insurance[]>(environment.insuranceSearchUrl)
      .subscribe((resp: Insurance[]) => this.searchResponseSubject.next(resp));
  }

  getResponse(): Observable<Insurance[]> {
    return this.searchResponseSubject.asObservable();
  }
}
