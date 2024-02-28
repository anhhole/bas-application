import { DiamondPriceWhereUniqueInput } from "../diamondPrice/DiamondPriceWhereUniqueInput";
import { OperatorUpdateManyWithoutOrganizationsInput } from "./OperatorUpdateManyWithoutOrganizationsInput";
import { OrderUpdateManyWithoutOrganizationsInput } from "./OrderUpdateManyWithoutOrganizationsInput";

export type OrganizationUpdateInput = {
  bigoId?: string | null;
  confirmState?: boolean;
  diamondCount?: number;
  diamondPrice?: DiamondPriceWhereUniqueInput;
  isSendSms?: boolean;
  lastestToken?: string;
  name?: string | null;
  operators?: OperatorUpdateManyWithoutOrganizationsInput;
  orders?: OrderUpdateManyWithoutOrganizationsInput;
  updatedAt?: Date;
};
