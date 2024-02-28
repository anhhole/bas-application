import { Organization } from "../organization/Organization";

export type DiamondPrice = {
  createdAt: Date;
  id: string;
  organizations?: Array<Organization>;
  value: number;
};
