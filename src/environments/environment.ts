// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { faCoins } from "@fortawesome/free-solid-svg-icons";
export const environment = {
  production: false,
  endpoint: "https://minto.cognitiveservices.azure.com/face/v1.0/detect",
  subscriptionKey: "f1c0008a30ae4156a4d80152fde1d58f",
  flightSearchUrl: "https://travelswift.azurewebsites.net/flights/duffelsearch",
  carSearchUrl: "assets/carresp.json",
  hotelSearchUrl: "assets/htresp.json",
  insuranceSearchUrl: "assets/insresp.json",
  getAllTravelApi:
    "https://swiftvm.centralus.cloudapp.azure.com:9000/api/getTravleInfo",
  loginUrl: "https://swiftvm.centralus.cloudapp.azure.com:9000/api/login",
  registrationUrl:
    "https://swiftvm.centralus.cloudapp.azure.com:9000/api/registerUser",
  saveExpenseUrl: "",
  bookingUrlUrl:
    "https://swiftvm.centralus.cloudapp.azure.com:9000/api/bookPackage",
  currency: "£ ",
  currencyIcon: faCoins,
  defaultDepPort: "JFK",
  defaultArrivalPort: "LHR",
  defaultHotelLocation: "London Central",
  defaultPickUpLocation: "Heathrow Airport",
  defaultDropOffLocation: "London Central",
  getBalanceApi:
    "http://swiftvm.centralus.cloudapp.azure.com:9000/api/getUserBalance",
  coporateBookingApi: "https://swiftvm.centralus.cloudapp.azure.com:9000/api",
  bagHistoryUrl: "http://www.google.com"
};
