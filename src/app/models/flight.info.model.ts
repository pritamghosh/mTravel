export class FlightInfo {
  airlineCode: string;
  aircraft: string;
  airlineName: string;
  flightNo: string;
  originPoint: string;
  originCountry: string;
  originAirportName: string;
  departureDate: Date;
  departureTime: string;
  departureOffser: number = 0;
  destinationPoint: string;
  destinationCountry: string;
  destinationAirportName: string;
  arrivalDate: Date;
  arrivalTime: string;
  ariivalOffset: number = 0;
  flightDuration: number;
}
