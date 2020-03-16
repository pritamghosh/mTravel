import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { AlertService } from "./alert.service";
import { BusyDisplayService } from "./busy-display.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class RegistrationService {
  constructor(
    private http: HttpClient,
    private alertService: AlertService,
    private busyDisplayService: BusyDisplayService,
    private router: Router
  ) {}

  rigister(req: any) {
    return this.http
      .post(environment.registrationUrl, req)
      .subscribe((resp: any) => {
        this.busyDisplayService.showBusyDisplay(false);
        this.alertService
          .openDiaolog(resp.result)
          .afterClosed()
          .subscribe(() => {
            this.router.navigateByUrl("/");
          });
      });
  }
}
