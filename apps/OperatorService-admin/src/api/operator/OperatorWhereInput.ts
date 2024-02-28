import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";

export type OperatorWhereInput = {
  bigoId?: StringNullableFilter;
  createdAt?: DateTimeFilter;
  diamondsAmount?: IntFilter;
  id?: StringFilter;
  operatorRole?: "Employee" | "Agent";
  organizationId?: StringFilter;
  updatedAt?: DateTimeFilter;
  userName?: StringNullableFilter;
};
