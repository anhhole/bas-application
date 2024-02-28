import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  SelectInput,
  ReferenceInput,
  DateTimeInput,
} from "react-admin";

import { OrganizationTitle } from "../organization/OrganizationTitle";

export const OperatorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Bigo Id" source="bigoId" />
        <NumberInput step={1} label="Diamonds Amount" source="diamondsAmount" />
        <SelectInput
          source="operatorRole"
          label="Operator Role"
          choices={[
            { label: "Employee", value: "Employee" },
            { label: "Agent", value: "Agent" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput
          source="organization.id"
          reference="Organization"
          label="Organization"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
        <DateTimeInput label="Updated At" source="updatedAt" />
        <TextInput label="User Name" source="userName" />
      </SimpleForm>
    </Create>
  );
};
