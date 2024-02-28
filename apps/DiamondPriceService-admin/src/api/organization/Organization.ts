import { DiamondPrice } from "../diamondPrice/DiamondPrice";
import { JsonValue } from "type-fest";

export type Organization = {
  bigoId: string | null;
  confirmState: boolean;
  createdAt: Date;
  diamondCount: number;
  diamondPrice?: DiamondPrice | null;
  id: string;
  isSendSms: boolean;
  lastestToken: string;
  name: string | null;
  operators: JsonValue;
  orders: JsonValue;
  updatedAt: Date;
};
