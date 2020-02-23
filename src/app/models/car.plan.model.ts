import { Car } from "./car.model";
import { CarHire } from "./car.hire.model";
import { Travellers } from "./travellers.model";

export class CarPlan {
  car: Car;
  req: CarHire;
  travellers: Travellers;
}
