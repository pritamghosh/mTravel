import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TravelPlanComponent } from "./travel-plan/travel-plan.component";
import { ExpenseComponent } from "./expense/expense.component";
import { RegistrationComponent } from "./registration/registration.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuardService } from "./services/auth-guard.service";
import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
  {
    path: "travelplan",
    canActivate: [AuthGuardService],
    component: TravelPlanComponent
  },
  {
    path: "expense",
    canActivate: [AuthGuardService],
    component: ExpenseComponent
  },
  { path: "registration", component: RegistrationComponent },
  { path: "login", component: LoginComponent },
  { path: "profile", component: ProfileComponent },
  { path: "", redirectTo: "travelplan", pathMatch: "full" }

  //{ path: "user", component: MsmComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
