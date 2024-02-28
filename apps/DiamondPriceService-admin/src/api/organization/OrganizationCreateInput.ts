import { DiamondPriceWhereUniqueInput } from "../diamondPrice/DiamondPriceWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type OrganizationCreateInput = {
  bigoId?: string | null;
  confirmState: boolean;
  diamondCount: number;
  diamondPrice?: DiamondPriceWhereUniqueInput | null;
  isSendSms: boolean;
  lastestToken: string;
  name?: string | null;
  operators?: InputJsonValue;
  orders?: InputJsonValue;
  updatedAt: Date;
};
