import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DiamondPriceResolverBase } from "./base/diamondPrice.resolver.base";
import { DiamondPrice } from "./base/DiamondPrice";
import { DiamondPriceService } from "./diamondPrice.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DiamondPrice)
export class DiamondPriceResolver extends DiamondPriceResolverBase {
  constructor(
    protected readonly service: DiamondPriceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
