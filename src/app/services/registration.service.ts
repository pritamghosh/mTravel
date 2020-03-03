import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { AlertService } from "./alert.service";
import { BusyDisplayService } from "./busy-display.service";

@Injectable({
  providedIn: "root"
})
export class RegistrationService {
  constructor(
    private http: HttpClient,
    private alertService: AlertService,
    private busyDisplayService: BusyDisplayService
  ) {}

  rigister(req: any) {
    return this.http
      .post(environment.registrationUrl, req)
      .subscribe((resp: any) => {
        this.alertService.openDiaolog(resp.result),
          this.busyDisplayService.showBusyDisplay(false);
      });
  }
}
