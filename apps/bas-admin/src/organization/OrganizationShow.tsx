import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ORGANIZATION_TITLE_FIELD } from "./OrganizationTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
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
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceManyField
          reference="Operator"
          target="organizationId"
          label="Operators"
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
        </ReferenceManyField>
        <ReferenceManyField
          reference="Order"
          target="organizationId"
          label="Orders"
        >
          <Datagrid rowClick="show">
            <TextField label="Amount" source="amount" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Customer"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Status Order" source="statusOrder" />
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
