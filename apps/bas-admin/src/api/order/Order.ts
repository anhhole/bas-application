import { Customer } from "../customer/Customer";
import { Organization } from "../organization/Organization";

export type Order = {
  amount: number | null;
  createdAt: Date;
  customer?: Customer;
  id: string;
  organization?: Organization;
  statusOrder?: "Complete" | "Pending" | "Error" | "Refund";
  updatedAt: Date;
};
