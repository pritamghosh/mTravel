import { BrowserModule } from "@angular/platform-browser";
import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
  ErrorHandler
} from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
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
import { MatStepperModule } from "@angular/material/stepper";
import { MatDialogModule, MatDialog } from "@angular/material/dialog";

import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";
import { Ng5SliderModule } from "ng5-slider";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

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
import { OffsetPipe } from "./pipes/offset.pipe";

import { AddressPipe } from "./pipes/address.pipe";
import { HotelDetailsComponent } from "./travel-plan/hotel/hotel-details/hotel-details.component";
import { CarDetailsComponent } from "./travel-plan/car/car-details/car-details.component";
import { OverviewPlanComponent } from "./travel-plan/overview-plan/overview-plan.component";
import { PassengerComponent } from "./travel-plan/passenger/passenger.component";
import { PassenegersComponent } from "./travel-plan/passenegers/passenegers.component";
import { RegistrationComponent } from "./registration/registration.component";
import { FaceComponent } from "./face/face.component";
import { LoginComponent } from "./login/login.component";
import { InsuranceDetailsComponent } from "./travel-plan/insurance/insurance-details/insurance-details.component";
import { ErrorService } from "./services/error.service";
import { ViewPlanComponent } from "./expense/view-plan/view-plan.component";
import { ProfileComponent } from "./profile/profile.component";
import { AlertComponent } from "./alert/alert.component";
import { FlightLoadingComponent } from "./travel-plan/flight/flight-loading/flight-loading.component";
import { BusyDisplayComponent } from "./busy-display/busy-display.component";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { WalletComponent } from './header/wallet/wallet.component';

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
    OffsetPipe,
    HotelDetailsComponent,
    AddressPipe,
    CarDetailsComponent,
    OverviewPlanComponent,
    PassengerComponent,
    PassenegersComponent,
    RegistrationComponent,
    FaceComponent,
    LoginComponent,
    InsuranceDetailsComponent,
    ViewPlanComponent,
    ProfileComponent,
    AlertComponent,
    FlightLoadingComponent,
    BusyDisplayComponent,
    WalletComponent
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
    MatStepperModule,
    MatChipsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    NgxMaterialTimepickerModule,
    MatBottomSheetModule,
    Ng5SliderModule,
    FontAwesomeModule
  ],
  providers: [{ provide: ErrorHandler, useClass: ErrorService }],
  bootstrap: [AppComponent],
  entryComponents: [FaceComponent],
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
    MatChipsModule,
    MatStepperModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatBottomSheetModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule {}
