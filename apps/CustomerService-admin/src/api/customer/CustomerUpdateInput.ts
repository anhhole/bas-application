import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  avatar?: string | null;
  bigoId?: string | null;
  countryCode?: string | null;
  orders?: OrderUpdateManyWithoutCustomersInput;
  updatedAt?: Date;
  userName?: string | null;
};
