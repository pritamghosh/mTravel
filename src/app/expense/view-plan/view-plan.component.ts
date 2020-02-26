import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Booking } from "src/app/models/booking.model";

@Component({
  selector: "app-view-plan",
  templateUrl: "./view-plan.component.html",
  styleUrls: ["./view-plan.component.scss"]
})
export class ViewPlanComponent implements OnInit {
  br: Booking;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ViewPlanComponent>
  ) {}

  ngOnInit(): void {
    this.br = this.data.br;
  }

  onCancel() {
    this.dialogRef.close();
  }
}
