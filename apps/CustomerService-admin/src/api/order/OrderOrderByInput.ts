import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  organizationId?: SortOrder;
  statusOrder?: SortOrder;
  updatedAt?: SortOrder;
};
