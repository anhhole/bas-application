export type Operator = {
  bigoId: string | null;
  createdAt: Date;
  diamondsAmount: number;
  id: string;
  operatorRole?: "Employee" | "Agent";
  organizationId: string;
  updatedAt: Date;
  userName: string | null;
};
