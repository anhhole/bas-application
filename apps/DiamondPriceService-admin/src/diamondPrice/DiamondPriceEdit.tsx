import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { OrganizationTitle } from "../organization/OrganizationTitle";

export const DiamondPriceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="organizations"
          reference="Organization"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrganizationTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
