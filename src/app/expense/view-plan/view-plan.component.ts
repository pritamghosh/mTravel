import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { TravelPlanResponse } from "src/app/models/travel.pla.response";

@Component({
  selector: "app-view-plan",
  templateUrl: "./view-plan.component.html",
  styleUrls: ["./view-plan.component.scss"]
})
export class ViewPlanComponent implements OnInit {
  tpr: TravelPlanResponse;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ViewPlanComponent>
  ) {}

  ngOnInit(): void {
    this.tpr = this.data.tpr;
  }

  onCancel() {
    this.dialogRef.close();
  }
}
