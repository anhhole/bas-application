import { OrganizationCreateNestedManyWithoutDiamondPricesInput } from "./OrganizationCreateNestedManyWithoutDiamondPricesInput";

export type DiamondPriceCreateInput = {
  organizations?: OrganizationCreateNestedManyWithoutDiamondPricesInput;
  value: number;
};
