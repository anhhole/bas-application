import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  DateField,
  ReferenceField,
} from "react-admin";

import { DIAMONDPRICE_TITLE_FIELD } from "../diamondPrice/DiamondPriceTitle";

export const OrganizationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <TextField label="Operators" source="operators" />
        <TextField label="Orders" source="orders" />
        <TextField label="Updated At" source="updatedAt" />
      </SimpleShowLayout>
    </Show>
  );
};
