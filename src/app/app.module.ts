import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatTabsModule } from "@angular/material/tabs";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatDividerModule } from "@angular/material/divider";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSliderModule } from "@angular/material/slider";
import { MatChipsModule } from "@angular/material/chips";

import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";
import { Ng5SliderModule } from "ng5-slider";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { TravelPlanComponent } from "./travel-plan/travel-plan.component";
import { FlightComponent } from "./travel-plan/flight/flight.component";
import { HotelComponent } from "./travel-plan/hotel/hotel.component";
import { CarComponent } from "./travel-plan/car/car.component";
import { InsuranceComponent } from "./travel-plan/insurance/insurance.component";
import { ExpenseComponent } from "./expense/expense.component";
import { FlightItineraryComponent } from "./travel-plan/flight/flight-itinerary/flight-itinerary.component";
import { FlightService } from "./services/flight.service";
import { TrailingDotPipe } from "./pipes/trailing-dot.pipe";
import { TimePipe } from "./pipes/time.pipe";
import { DurationPipe } from "./pipes/duration.pipe";
import { OffsetPipe } from './pipes/offset.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TravelPlanComponent,
    FlightComponent,
    HotelComponent,
    CarComponent,
    InsuranceComponent,
    ExpenseComponent,
    FlightItineraryComponent,
    TrailingDotPipe,
    TimePipe,
    DurationPipe,
    OffsetPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatTableModule,
    MatSortModule,
    MatTabsModule,
    MatGridListModule,
    MatDividerModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatSliderModule,
    MatChipsModule,
    NgxMaterialTimepickerModule,
    Ng5SliderModule
  ],
  providers: [FlightService],
  bootstrap: [AppComponent],
  exports: [
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatTableModule,
    MatSortModule,
    MatTabsModule,
    MatGridListModule,
    MatDividerModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatSliderModule,
    MatChipsModule
  ]
})
export class AppModule {}
