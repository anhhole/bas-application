export type OperatorCreateInput = {
  bigoId?: string | null;
  diamondsAmount: number;
  operatorRole: "Employee" | "Agent";
  organizationId: string;
  updatedAt: Date;
  userName?: string | null;
};
