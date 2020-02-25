export class Insurance {
  name: string;
  type: string;
  person: number;
  startDate: Date;
  endDate: Date;
  price: number;
  coverage: string[];
  days: number;
  description: {
    title: string;
    details: string;
  }[];
}
