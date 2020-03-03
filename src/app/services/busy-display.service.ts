import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class BusyDisplayService {
  showBusyDisplaySubject = new Subject<boolean>();

  showBusyDisplay(flag: boolean) {
    this.showBusyDisplaySubject.next(flag);
  }
  constructor() {}
}
