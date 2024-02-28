import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { DiamondPriceWhereUniqueInput } from "../diamondPrice/DiamondPriceWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { OperatorListRelationFilter } from "../operator/OperatorListRelationFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type OrganizationWhereInput = {
  bigoId?: StringNullableFilter;
  confirmState?: BooleanFilter;
  createdAt?: DateTimeFilter;
  diamondCount?: IntFilter;
  diamondPrice?: DiamondPriceWhereUniqueInput;
  id?: StringFilter;
  isSendSms?: BooleanFilter;
  lastestToken?: StringFilter;
  name?: StringNullableFilter;
  operators?: OperatorListRelationFilter;
  orders?: OrderListRelationFilter;
  updatedAt?: DateTimeFilter;
};
