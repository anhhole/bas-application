import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  DateField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { DIAMONDPRICE_TITLE_FIELD } from "../diamondPrice/DiamondPriceTitle";

export const OrganizationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Organizations"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
