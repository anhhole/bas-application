import { DiamondPrice } from "../diamondPrice/DiamondPrice";
import { Operator } from "../operator/Operator";
import { Order } from "../order/Order";

export type Organization = {
  bigoId: string | null;
  confirmState: boolean;
  createdAt: Date;
  diamondCount: number;
  diamondPrice?: DiamondPrice;
  id: string;
  isSendSms: boolean;
  lastestToken: string;
  name: string | null;
  operators?: Array<Operator>;
  orders?: Array<Order>;
  updatedAt: Date;
};
