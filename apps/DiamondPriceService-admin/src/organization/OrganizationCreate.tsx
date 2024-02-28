import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { DiamondPriceTitle } from "../diamondPrice/DiamondPriceTitle";

export const OrganizationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Bigo Id" source="bigoId" />
        <BooleanInput label="Confirm State" source="confirmState" />
        <NumberInput step={1} label="Diamond Count" source="diamondCount" />
        <ReferenceInput
          source="diamondPrice.id"
          reference="DiamondPrice"
          label="Diamond Price"
        >
          <SelectInput optionText={DiamondPriceTitle} />
        </ReferenceInput>
        <BooleanInput label="Is Send Sms" source="isSendSms" />
        <TextInput label="Lastest Token" source="lastestToken" />
        <TextInput label="Name" source="name" />
        <div />
        <div />
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Create>
  );
};
