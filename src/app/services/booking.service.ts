import { Injectable } from "@angular/core";
import { AlertService } from "./alert.service";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { LoginService } from "./login.service";
import { BusyDisplayService } from "./busy-display.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class BookingService {
  constructor(
    private http: HttpClient,
    private alertService: AlertService,
    private loginService: LoginService,
    private busyDisplayService: BusyDisplayService,
    private router: Router
  ) {}

  book(req: any) {
    return this.http
      .post(environment.bookingUrlUrl, req)
      .subscribe((resp: any) => {
        const dialog = this.alertService.openDiaolog(resp.message);
        dialog.afterClosed().subscribe(() => this.router.navigate(["/"]));
        this.busyDisplayService.showBusyDisplay(false);
        this.loginService.getBalance();
      });
  }
}
