import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";

export const OperatorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
