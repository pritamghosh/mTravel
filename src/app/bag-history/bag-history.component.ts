import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MatTableDataSource } from "@angular/material/table";
import {
  BagResponse,
  ConfirmBagHistoryResponse
} from "../models/bag.response.model";
import { Subscription } from "rxjs";
import { BagTagService } from "../services/bag-tag.service";
import { AlertService } from "../services/alert.service";

@Component({
  selector: "app-bag-history",
  templateUrl: "./bag-history.component.html",
  styleUrls: ["./bag-history.component.scss"]
})
export class BagHistoryComponent implements OnInit, OnDestroy {
  history = false;

  fg: FormGroup;
  constructor(
    private service: BagTagService,
    private alertService: AlertService
  ) {}
  confirmBagHistoryResponse: any = [];
  bagResMainPanel: BagResponse;
  airportsPanel: any = [];
  dataSourceBagResponse: MatTableDataSource<
    BagResponse
  > = new MatTableDataSource();
  dataSourceBagResponseColumn: string[] = [
    "status",
    "timestamp",
    "arrivalFlight",
    "departureFlight",
    "connectionFlight",
    "loadFlight"
  ];
  subs: Subscription;

  ngOnInit(): void {
    this.fg = new FormGroup({
      bagTagID: new FormControl(null, Validators.required),
      travelDate: new FormControl(new Date(), Validators.required)
    });

    this.subs = this.service.searchResponseSubject
      .asObservable()
      .subscribe(resp => this.populateResp(resp));
  }

  openPanel(airport: string) {
    this.confirmBagHistoryResponse.forEach((confirmBagHistory: any) => {
      if (confirmBagHistory.airportCode === airport) {
        this.dataSourceBagResponse.data = confirmBagHistory.bagResponses;
      }
    });
  }
  populateResp(response: any) {
    this.bagResMainPanel = new BagResponse();
    this.airportsPanel = [];
    for (var airport in response) {
      this.airportsPanel.push(airport);

      let bagResponses: any = [];
      let confirmHistoryRes = new ConfirmBagHistoryResponse();

      response[airport].forEach(bagHistoryResponse => {
        let bagResonse = new BagResponse();

        bagResonse.airportCode = airport;
        bagResonse.status = bagHistoryResponse.status;
        bagResonse.timestamp = bagHistoryResponse.timestamp;
        bagResonse.from = bagHistoryResponse.from;
        bagResonse.departureFlight = bagHistoryResponse.departureFlight;
        bagResonse.loadFlight = bagHistoryResponse.loadFlight;
        bagResonse.connectionFlight = bagHistoryResponse.connectionFlight;
        bagResponses.push(bagResonse);
      });

      confirmHistoryRes.airportCode = airport;
      confirmHistoryRes.bagResponses = bagResponses;

      this.confirmBagHistoryResponse.push(confirmHistoryRes);

      this.bagResMainPanel.bagTagID = response[airport][0].bagTagID;
      this.bagResMainPanel.firstName = response[airport][0].firstName;
      this.bagResMainPanel.lastName = response[airport][0].lastName;
      this.bagResMainPanel.numberOfCheckedInBags =
        response[airport][0].numberOfCheckedInBags;
      this.bagResMainPanel.departureFlight =
        response[airport][0].departureFlight;
    }
    this.history = true;
  }

  onSubmit() {
    this.service.getBagHistory(this.fg.value);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
