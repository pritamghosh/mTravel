import { FlightPlan } from "./flight.plan.model";

export class Booking {
  id: number;
  status: string;
  travelInfo: string;
  flight: FlightPlan;
  email: string;
  faceId: string;
  bookings: { partner: string; amount: number }[] = [];
}
