import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { DiamondPriceWhereUniqueInput } from "../diamondPrice/DiamondPriceWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

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
  operators?: JsonFilter;
  orders?: JsonFilter;
  updatedAt?: DateTimeFilter;
};
