import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Insurance } from "../models/insurane.model";

@Injectable({
  providedIn: "root"
})
export class InsuranceService {
  searchResponseSubject = new Subject<Insurance[]>();
  localUrl = "assets/insresp.json";

  constructor(private http: HttpClient) {}
  search(req: any) {
    return this.http
      .get<Insurance[]>(this.localUrl)
      .subscribe((resp: Insurance[]) => this.searchResponseSubject.next(resp));
  }

  getResponse(): Observable<Insurance[]> {
    return this.searchResponseSubject.asObservable();
  }
}
