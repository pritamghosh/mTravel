const LOGIN_INFO_KEY = "loginInfo";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  isLoggedInSubject = new Subject<boolean>();
  constructor(private http: HttpClient) {}

  login(login: any): Promise<any> {
    this.signOut();
    return new Promise((resolve, reject) => {
      //this.http.post("http://localhost:9052/login", login).subscribe(
      //   resp => {
      //     this.savetoContext(resp);
      //     resolve(true);
      //   },
      //   error => {
      //     console.error(error);
      //     reject();
      //   }
      // );
      console.log(JSON.stringify(login));

      this.savetoContext(login);
      resolve(true);
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

  getUser(): any {
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
