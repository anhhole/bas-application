import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  avatar?: string | null;
  bigoId?: string | null;
  countryCode?: string | null;
  orders?: OrderCreateNestedManyWithoutCustomersInput;
  updatedAt: Date;
  userName?: string | null;
};
