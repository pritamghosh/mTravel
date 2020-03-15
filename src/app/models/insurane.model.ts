export class Insurance {
  name: string;

  tax: number;
  basePrice: number;
  type: string;
  person: number;
  startDate: Date;
  endDate: Date;
  price: number;
  vendor: string;
  coverage: string[];
  days: number;
  description: {
    title: string;
    details: string;
  }[];
}
