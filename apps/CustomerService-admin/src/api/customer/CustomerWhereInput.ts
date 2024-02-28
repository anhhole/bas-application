import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type CustomerWhereInput = {
  avatar?: StringNullableFilter;
  bigoId?: StringNullableFilter;
  countryCode?: StringNullableFilter;
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  orders?: OrderListRelationFilter;
  updatedAt?: DateTimeFilter;
  userName?: StringNullableFilter;
};
