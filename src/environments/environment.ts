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
    "https://travelswift.azurewebsites.net/minto-app/api/getTravleInfo",
  loginUrl: "https://travelswift.azurewebsites.net/minto-app/api/login",
  registrationUrl:
    "https://travelswift.azurewebsites.net/minto-app/api/registerUser",
  saveExpenseUrl: "",
  bookingUrlUrl:
    "https://travelswift.azurewebsites.net/minto-app/api/bookPackage",
  currency: "£ ",
  currencyIcon: faCoins,
  defaultDepPort: "JFK",
  defaultArrivalPort: "LHR",
  defaultHotelLocation: "London Central",
  defaultPickUpLocation: "Heathrow Airport",
  defaultDropOffLocation: "London Central",
  getBalanceApi:
    "https://travelswift.azurewebsites.net/minto-app/api/getUserBalance",
  coporateBookingApi: "https://travelswift.azurewebsites.net/minto-app/api"
};
