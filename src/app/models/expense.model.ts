export class Expense {
  id: number;
  type: string;
  document: string;
  description: string;
  travelId: string;
  fileName: string;
}

export class ExpenseReport {
  txnId: string;
  date: Date;
  merchant: string;
  amount: number;
  expenseFound: boolean;
  txnFound: boolean;
}
