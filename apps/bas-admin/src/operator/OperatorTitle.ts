import { Operator as TOperator } from "../api/operator/Operator";

export const OPERATOR_TITLE_FIELD = "userName";

export const OperatorTitle = (record: TOperator): string => {
  return record.userName?.toString() || String(record.id);
};
