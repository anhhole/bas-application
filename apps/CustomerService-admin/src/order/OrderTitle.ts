import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "organizationId";

export const OrderTitle = (record: TOrder): string => {
  return record.organizationId?.toString() || String(record.id);
};
