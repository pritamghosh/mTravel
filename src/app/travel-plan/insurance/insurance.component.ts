import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { InsuranceService } from "src/app/services/insurance.service";
import { Insurance } from "src/app/models/insurane.model";
import { Subscription } from "rxjs";
import { LoginService } from "src/app/services/login.service";

@Component({
  selector: "app-insurance",
  templateUrl: "./insurance.component.html",
  styleUrls: ["./insurance.component.scss"]
})
export class InsuranceComponent implements OnInit, OnDestroy {
  constructor(
    private service: InsuranceService,
    private loginService: LoginService
  ) {}
  minDate = new Date();
  searchInsuranceForm: FormGroup;
  isSearched = false;
  searchResp: Insurance[];
  filteredResponse: Insurance[] = [];
  subscription: Subscription;
  ngOnInit(): void {
    this.searchInsuranceForm = new FormGroup({
      startDate: new FormControl(new Date(), Validators.required),
      endDate: new FormControl(new Date(), Validators.required),
      number: new FormControl(1, Validators.min(1)),
      type: new FormControl(""),
      medical: new FormControl(true),
      personal: new FormControl(true),
      family: new FormControl(true),
      flight: new FormControl(true)
    });

    this.subscription = this.service.getResponse().subscribe(resp => {
      this.searchResp = resp;
      this.searchResp.forEach(element => {
        if (element.price <= this.loginService.insurancePrice) {
          this.filteredResponse.push(element);
        }
      });
      this.isSearched = true;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  getQuote() {
    this.isSearched = true;
    this.service.search(this.searchInsuranceForm.value);
  }

  get minEndDate() {
    return this.searchInsuranceForm.get("startDate").value != null
      ? this.searchInsuranceForm.get("startDate").value
      : new Date();
  }
}
