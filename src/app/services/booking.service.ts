import { Injectable } from "@angular/core";
import { AlertService } from "./alert.service";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class BookingService {
  constructor(private http: HttpClient, private alertService: AlertService) {}

  book(req: any) {
    return this.http
      .post(environment.bookingUrlUrl, req)
      .subscribe((resp: any) => this.alertService.openDiaolog(resp.message));
  }
}
