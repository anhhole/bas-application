import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const OperatorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Bigo Id" source="bigoId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Diamonds Amount" source="diamondsAmount" />
        <TextField label="ID" source="id" />
        <TextField label="Operator Role" source="operatorRole" />
        <TextField label="Organization ID" source="organizationId" />
        <TextField label="Updated At" source="updatedAt" />
        <TextField label="User Name" source="userName" />
      </SimpleShowLayout>
    </Show>
  );
};
