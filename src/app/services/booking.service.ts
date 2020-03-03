import { Injectable } from "@angular/core";
import { AlertService } from "./alert.service";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { LoginService } from "./login.service";
import { BusyDisplayService } from './busy-display.service';

@Injectable({
  providedIn: "root"
})
export class BookingService {
  constructor(
    private http: HttpClient,
    private alertService: AlertService,
    private loginService: LoginService,
    private busyDisplayService : BusyDisplayService
  ) {}

  book(req: any) {
    return this.http
      .post(environment.bookingUrlUrl, req)
      .subscribe((resp: any) => {
        this.alertService.openDiaolog(resp.message);
        ,this.busyDisplayService.showBusyDisplay(false)
        this.loginService.getBalance();
      });
  }
}
