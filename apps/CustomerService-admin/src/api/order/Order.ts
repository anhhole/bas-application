import { Customer } from "../customer/Customer";

export type Order = {
  amount: number | null;
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  organizationId: string;
  statusOrder?: "Complete" | "Pending" | "Error" | "Refund";
  updatedAt: Date;
};
