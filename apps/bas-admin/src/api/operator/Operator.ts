import { Organization } from "../organization/Organization";

export type Operator = {
  bigoId: string | null;
  createdAt: Date;
  diamondsAmount: number;
  id: string;
  operatorRole?: "Employee" | "Agent";
  organization?: Organization;
  updatedAt: Date;
  userName: string | null;
};
