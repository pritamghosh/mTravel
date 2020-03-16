import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { TravelPlan } from "../models/travel.plan.model";
import { ExpenseService } from "../services/expense.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Expense } from "../models/expense.model";
import { MatDialogConfig, MatDialog } from "@angular/material/dialog";
import { ViewPlanComponent } from "./view-plan/view-plan.component";
import { Booking } from "../models/booking.model";

@Component({
  selector: "app-expense",
  templateUrl: "./expense.component.html",
  styleUrls: ["./expense.component.scss"]
})
export class ExpenseComponent implements OnInit {
  @ViewChild("uploadFile") uploadElement: HTMLElement;
  step = 1;
  tid = "";
  filename: string = "";
  bookingResponse: Booking[];
  expenses: Expense[] = [];
  selcectedArray: [];
  fg = new FormGroup({
    document: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required)
  });
  constructor(private service: ExpenseService, public dialog: MatDialog) {}
  addToExpense() {
    let expense: Expense = this.fg.value;
    expense.travelId = this.tid;
    expense.fileName = this.filename;
    expense.type = "OTHER";
    this.expenses.push(expense);
    this.fg.reset();
    this.filename = "";
    this.fg.get("description").setErrors(null);
  }

  uploadFile(event: any) {
    let files = event.target.files;
    let str = this.fg.get("document");
    this.filename = files[0].name;
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = function() {
      str.setValue(reader.result);
    };
    reader.onerror = function(error) {
      console.error("Error: ", error);
    };
  }

  onSubmit() {
    this.service.save(this.expenses);
  }
  onchange() {
    this.expenses = [];
  }
  addToCalim() {
    let expense = new Expense();
    expense.type = "TRAVEL";
    expense.travelId = this.tid;
    expense.description =
      "Travel Expense : " + this.bookingResponse[this.tid].id;
    this.expenses.push(expense);
  }
  onRemove(index: number) {
    this.expenses.splice(index, 1);
  }
  viewTravelPlan() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      br: this.bookingResponse[this.tid]
    };

    const dialogRef = this.dialog.open(ViewPlanComponent, dialogConfig);
  }
  ngOnInit(): void {
    this.service.getTravelPlans();
    this.service.travelSubject.asObservable().subscribe(resp => {
      this.bookingResponse = resp;
    });
  }
}
