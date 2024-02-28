import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type OperatorCreateInput = {
  bigoId?: string | null;
  diamondsAmount: number;
  operatorRole: "Employee" | "Agent";
  organization: OrganizationWhereUniqueInput;
  updatedAt: Date;
  userName?: string | null;
};
