import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrganizationListRelationFilter } from "../organization/OrganizationListRelationFilter";
import { IntFilter } from "../../util/IntFilter";

export type DiamondPriceWhereInput = {
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  organizations?: OrganizationListRelationFilter;
  value?: IntFilter;
};
