import { Component, OnInit, OnDestroy } from "@angular/core";
import { BusyDisplayService } from "../services/busy-display.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-busy-display",
  templateUrl: "./busy-display.component.html",
  styleUrls: ["./busy-display.component.scss"]
})
export class BusyDisplayComponent implements OnInit, OnDestroy {
  constructor(private service: BusyDisplayService) {}
  subscription: Subscription;
  showBusiDisplay = false;
  ngOnInit(): void {
    this.subscription = this.service.showBusyDisplaySubject
      .asObservable()
      .subscribe(resp => (this.showBusiDisplay = resp));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }
}
