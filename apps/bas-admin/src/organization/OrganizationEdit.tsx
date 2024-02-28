import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { DiamondPriceTitle } from "../diamondPrice/DiamondPriceTitle";
import { OperatorTitle } from "../operator/OperatorTitle";
import { OrderTitle } from "../order/OrderTitle";

export const OrganizationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
        <ReferenceArrayInput
          source="operators"
          reference="Operator"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OperatorTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="orders"
          reference="Order"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrderTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Edit>
  );
};
