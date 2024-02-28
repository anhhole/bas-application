import { DiamondPriceWhereUniqueInput } from "../diamondPrice/DiamondPriceWhereUniqueInput";
import { OperatorCreateNestedManyWithoutOrganizationsInput } from "./OperatorCreateNestedManyWithoutOrganizationsInput";
import { OrderCreateNestedManyWithoutOrganizationsInput } from "./OrderCreateNestedManyWithoutOrganizationsInput";

export type OrganizationCreateInput = {
  bigoId?: string | null;
  confirmState: boolean;
  diamondCount: number;
  diamondPrice: DiamondPriceWhereUniqueInput;
  isSendSms: boolean;
  lastestToken: string;
  name?: string | null;
  operators?: OperatorCreateNestedManyWithoutOrganizationsInput;
  orders?: OrderCreateNestedManyWithoutOrganizationsInput;
  updatedAt: Date;
};
