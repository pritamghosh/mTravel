import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Injectable } from "@angular/core";
import { LoginService } from "./login.service";
@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  isLoggedIn = false;
  isAdmin = false;
  constructor(private loginService: LoginService, private router: Router) {
    this.isLoggedIn = this.loginService.isLoggedIn();
    this.loginService.isLoggedInSubject
      .asObservable()
      .subscribe(isLoggedinParam => {
        console.log(isLoggedinParam);

        this.isLoggedIn = isLoggedinParam;
      });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.isLoggedIn) {
      return true;
    }
    this.router.navigate(["login"], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
