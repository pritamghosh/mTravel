import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { TravelPlan } from "../models/travel.plan.model";
import { ExpenseService } from "../services/expense.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Expense, ExpenseReport } from "../models/expense.model";
import { MatDialogConfig, MatDialog } from "@angular/material/dialog";
import { ViewPlanComponent } from "./view-plan/view-plan.component";
import { Booking } from "../models/booking.model";
import { Subscription } from "rxjs";

@Component({
  selector: "app-expense",
  templateUrl: "./expense.component.html",
  styleUrls: ["./expense.component.scss"]
})
export class ExpenseComponent implements OnInit, OnDestroy {
  @ViewChild("uploadFile") uploadElement: HTMLElement;
  step = 1;
  tid = "";
  rtid = "";
  filename: string = "";
  bookingResponse: Booking[];
  expenses: Expense[] = [];
  selcectedArray: [];
  report: ExpenseReport[];
  sub1: Subscription;
  sub2: Subscription;

  displayedColumns: string[] = [
    "merchant",
    "date",
    "amount",
    "expense_claimed",
    "transaction"
  ];
  fg = new FormGroup({
    document: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required)
  });
  constructor(private service: ExpenseService, public dialog: MatDialog) {}
  addToExpense() {
    let expense: Expense = this.fg.value;

    expense.travelId = this.bookingResponse[this.tid].id;
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
    this.service.save(this.expenses).then(() => (this.expenses = []));
  }
  onchange() {
    this.expenses = [];
  }
  addToCalim() {
    let expense = new Expense();
    expense.type = "TRAVEL";
    expense.travelId = this.bookingResponse[this.tid].id;
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
    this.sub1 = this.service.travelSubject.asObservable().subscribe(resp => {
      this.bookingResponse = resp;
    });
    this.sub2 = this.service.expenseReportSubject
      .asObservable()
      .subscribe(resp => {
        this.report = resp;
      });
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
  }
  viewReport() {
    let travelId = this.bookingResponse[this.rtid].id;
    this.service.getExpenseReport(travelId);
  }
}
