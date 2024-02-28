import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type OrderUpdateInput = {
  amount?: number | null;
  customer?: CustomerWhereUniqueInput | null;
  organizationId?: string;
  statusOrder?: "Complete" | "Pending" | "Error" | "Refund";
  updatedAt?: Date;
};
