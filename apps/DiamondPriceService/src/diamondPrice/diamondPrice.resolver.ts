import * as graphql from "@nestjs/graphql";
import { DiamondPriceResolverBase } from "./base/diamondPrice.resolver.base";
import { DiamondPrice } from "./base/DiamondPrice";
import { DiamondPriceService } from "./diamondPrice.service";

@graphql.Resolver(() => DiamondPrice)
export class DiamondPriceResolver extends DiamondPriceResolverBase {
  constructor(protected readonly service: DiamondPriceService) {
    super(service);
  }
}
