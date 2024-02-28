import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type OrderCreateInput = {
  amount?: number | null;
  customer: CustomerWhereUniqueInput;
  organization: OrganizationWhereUniqueInput;
  statusOrder: "Complete" | "Pending" | "Error" | "Refund";
  updatedAt: Date;
};
