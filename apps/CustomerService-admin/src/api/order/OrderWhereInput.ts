import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type OrderWhereInput = {
  amount?: IntNullableFilter;
  createdAt?: DateTimeFilter;
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  organizationId?: StringFilter;
  statusOrder?: "Complete" | "Pending" | "Error" | "Refund";
  updatedAt?: DateTimeFilter;
};
