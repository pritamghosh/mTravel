const LOGIN_INFO_KEY = "loginInfo-swift-corporate-booking";
import { Injectable } from "@angular/core";
import { Subject, from } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { User } from "src/app/models/user.model";
import { environment } from "src/environments/environment";
import { BusyDisplayService } from "./busy-display.service";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  isLoggedInSubject = new Subject<boolean>();
  balanceSubject = new Subject<number>();
  balance = 0;
  flightFare = 0;
  carFare = 0;
  hotelPrice = 0;
  insurancePrice = 0;
  constructor(
    private http: HttpClient,
    private busyDisplayService: BusyDisplayService
  ) {}

  login(login: any): Promise<any> {
    this.signOut();
    this.busyDisplayService.showBusyDisplay(true);
    return new Promise(resolve => {
      this.http
        .post(
          "https://airlinemindtree.azurewebsites.net/bag-tracker/api/bagtracker/login",
          login
        )
        .subscribe(resp => {
          this.savetoContext(resp);
          this.getBalance();
          resolve(true);
          this.busyDisplayService.showBusyDisplay(false);
        });
    });
  }

  getBalance() {
    return new Promise(resolve => {
      this.getCap().then(() => {
        if (this.getUser() != null) {
          let url = `${environment.getBalanceApi}/${this.getUser().email}`;
          this.http.get(url).subscribe((resp: any) => {
            this.balanceSubject.next(resp.balance);
            this.balance = resp.balance;
            resolve();
          });
        }
      });
    });
  }
  getCap() {
    return new Promise(resolve => {
      if (this.getUser() != null) {
        let url = `${environment.capUrl}`;
        this.http.get(url).subscribe((resp: any) => {
          this.flightFare = resp.flight;
          this.hotelPrice = resp.hotel;
          this.carFare = resp.car;
          this.insurancePrice = resp.insurance;
          resolve();
        });
      }
    });
  }
  public savetoContext(resp: any) {
    if (resp != null) {
      localStorage.setItem(LOGIN_INFO_KEY, JSON.stringify(resp));
      this.isLoggedInSubject.next(true);
    }
  }
  isLoggedIn(): boolean {
    let resp = localStorage.getItem(LOGIN_INFO_KEY);
    return resp != null;
  }

  getUser(): User {
    localStorage.getItem(LOGIN_INFO_KEY);
    let resp = localStorage.getItem(LOGIN_INFO_KEY);
    if (resp != null) {
      return JSON.parse(resp);
    }
    return null;
  }
  getToken(): any {
    let resp = localStorage.getItem(LOGIN_INFO_KEY);
    if (resp != null) {
      return JSON.parse(resp).tokenInfo.access_token;
    }
    return null;
  }

  public clearContext() {
    localStorage.removeItem(LOGIN_INFO_KEY);
    this.isLoggedInSubject.next(false);
  }
  public signOut() {
    this.clearContext();
  }
}
