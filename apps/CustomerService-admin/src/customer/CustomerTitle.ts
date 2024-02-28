import { Customer as TCustomer } from "../api/customer/Customer";

export const CUSTOMER_TITLE_FIELD = "userName";

export const CustomerTitle = (record: TCustomer): string => {
  return record.userName?.toString() || String(record.id);
};
