import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TravelPlanComponent } from "./travel-plan/travel-plan.component";
import { ExpenseComponent } from "./expense/expense.component";

const routes: Routes = [
  { path: "travelplan", component: TravelPlanComponent },
  { path: "expense", component: ExpenseComponent }
  //{ path: "user", component: MsmComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
