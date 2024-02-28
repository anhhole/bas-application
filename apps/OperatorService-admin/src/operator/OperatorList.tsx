import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const OperatorList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Operators"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Bigo Id" source="bigoId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Diamonds Amount" source="diamondsAmount" />
        <TextField label="ID" source="id" />
        <TextField label="Operator Role" source="operatorRole" />
        <TextField label="Organization ID" source="organizationId" />
        <TextField label="Updated At" source="updatedAt" />
        <TextField label="User Name" source="userName" />
      </Datagrid>
    </List>
  );
};
