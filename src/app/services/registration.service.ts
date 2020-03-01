import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { AlertService } from "./alert.service";

@Injectable({
  providedIn: "root"
})
export class RegistrationService {
  constructor(private http: HttpClient, private alertService: AlertService) {}

  rigister(req: any) {
    return this.http
      .post(environment.registrationUrl, req)
      .subscribe((resp: string) => this.alertService.openDiaolog(resp));
  }
}
