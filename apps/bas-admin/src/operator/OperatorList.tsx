import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";

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
        <ReferenceField
          label="Organization"
          source="organization.id"
          reference="Organization"
        >
          <TextField source={ORGANIZATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Updated At" source="updatedAt" />
        <TextField label="User Name" source="userName" />
      </Datagrid>
    </List>
  );
};
