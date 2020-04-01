export class BagResponse {
  status: string;
  timestamp: string;
  from: string;
  to: string;
  airportCode: string;
  messageDate: string;
  arrivalFlight: string;
  departureFlight: string;
  connectionFlight: string;
  loadFlight: string;
  bagTagID: string;
  firstName: string;
  lastName: string;
  numberOfCheckedInBags: string;
  message: string;
}

export class ConfirmBagHistoryResponse {
  airportCode: string;
  bagResponses: BagResponse[];
}
