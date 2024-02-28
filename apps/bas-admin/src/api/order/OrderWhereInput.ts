import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type OrderWhereInput = {
  amount?: IntNullableFilter;
  createdAt?: DateTimeFilter;
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  organization?: OrganizationWhereUniqueInput;
  statusOrder?: "Complete" | "Pending" | "Error" | "Refund";
  updatedAt?: DateTimeFilter;
};
