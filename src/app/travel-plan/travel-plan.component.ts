import { Component, OnInit, OnDestroy } from "@angular/core";
import { TravelService } from "../services/travel.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-travel-plan",
  templateUrl: "./travel-plan.component.html",
  styleUrls: ["./travel-plan.component.scss"]
})
export class TravelPlanComponent implements OnInit {
  selectedTab = 0;
  subs: Subscription;
  constructor(private travelService: TravelService) {}

  ngOnInit(): void {
    this.subs = this.travelService.tabIndex
      .asObservable()
      .subscribe((resp: number) => (this.selectedTab = resp));
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
