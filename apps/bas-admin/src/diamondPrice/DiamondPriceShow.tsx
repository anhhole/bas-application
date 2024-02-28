import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { DIAMONDPRICE_TITLE_FIELD } from "./DiamondPriceTitle";

export const DiamondPriceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Value" source="value" />
        <ReferenceManyField
          reference="Organization"
          target="diamondPriceId"
          label="Organizations"
        >
          <Datagrid rowClick="show">
            <TextField label="Bigo Id" source="bigoId" />
            <BooleanField label="Confirm State" source="confirmState" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Diamond Count" source="diamondCount" />
            <ReferenceField
              label="Diamond Price"
              source="diamondprice.id"
              reference="DiamondPrice"
            >
              <TextField source={DIAMONDPRICE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <BooleanField label="Is Send Sms" source="isSendSms" />
            <TextField label="Lastest Token" source="lastestToken" />
            <TextField label="Name" source="name" />
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
