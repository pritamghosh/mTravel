// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { faCoins } from "@fortawesome/free-solid-svg-icons";
export const environment = {
  production: false,
  endpoint: "https://uksouth.api.cognitive.microsoft.com/face/v1.0/detect",
  subscriptionKey: "f97a67b2085a44299d2d3a8c721cc92c",
  flightSearchUrl: "assets/fresp.json",
  carSearchUrl: "assets/carresp.json",
  hotelSearchUrl: "assets/htresp.json",
  insuranceSearchUrl: "assets/insresp.json",
  getAllTravelUrl: "assets/trresp.json",
  loginUrl: "assets/loginresp.json",
  registrationUrl: "",
  saveExpenseUrl: "",
  bookingUrlUrl: "",
  currency: "£ ",
  currencyIcon: faCoins
};
