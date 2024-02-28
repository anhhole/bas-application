import { DiamondPriceWhereInput } from "./DiamondPriceWhereInput";
import { DiamondPriceOrderByInput } from "./DiamondPriceOrderByInput";

export type DiamondPriceFindManyArgs = {
  where?: DiamondPriceWhereInput;
  orderBy?: Array<DiamondPriceOrderByInput>;
  skip?: number;
  take?: number;
};
