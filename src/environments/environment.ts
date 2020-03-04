// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { faCoins } from "@fortawesome/free-solid-svg-icons";
export const environment = {
  production: false,
  endpoint: "https://uksouth.api.cognitive.microsoft.com/face/v1.0/detect",
  subscriptionKey: "f97a67b2085a44299d2d3a8c721cc92c",
  flightSearchUrl:
    "https://treavelswift.azurewebsites.net/flights/duffelsearch",
  carSearchUrl: "assets/carresp.json",
  hotelSearchUrl: "assets/htresp.json",
  insuranceSearchUrl: "assets/insresp.json",
  getAllTravelApi:
    "https://treavelswift.azurewebsites.net/minto-app/api/getTravleInfo",
  loginUrl: "https://treavelswift.azurewebsites.net/minto-app/api/login",
  registrationUrl:
    "https://treavelswift.azurewebsites.net/minto-app/api/registerUser",
  saveExpenseUrl: "",
  bookingUrlUrl:
    "https://treavelswift.azurewebsites.net/minto-app/api/bookPackage",
  currency: "£ ",
  currencyIcon: faCoins,
  defaultDepPort: "JFK",
  defaultArrivalPort: "LHR",
  defaultHotelLocation: "London Central",
  defaultPickUpLocation: "Heathrow Airport",
  defaultDropOffLocation: "London Central",
  getBalanceApi:
    "https://treavelswift.azurewebsites.net/minto-app/api/getUserBalance"
};
