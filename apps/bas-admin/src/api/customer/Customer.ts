import { Order } from "../order/Order";

export type Customer = {
  avatar: string | null;
  bigoId: string | null;
  countryCode: string | null;
  createdAt: Date;
  id: string;
  orders?: Array<Order>;
  updatedAt: Date;
  userName: string | null;
};
