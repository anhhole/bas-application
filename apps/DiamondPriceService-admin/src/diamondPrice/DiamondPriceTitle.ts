import { DiamondPrice as TDiamondPrice } from "../api/diamondPrice/DiamondPrice";

export const DIAMONDPRICE_TITLE_FIELD = "id";

export const DiamondPriceTitle = (record: TDiamondPrice): string => {
  return record.id?.toString() || String(record.id);
};
