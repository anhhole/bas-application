/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { DiamondPrice } from "./DiamondPrice";
import { DiamondPriceCountArgs } from "./DiamondPriceCountArgs";
import { DiamondPriceFindManyArgs } from "./DiamondPriceFindManyArgs";
import { DiamondPriceFindUniqueArgs } from "./DiamondPriceFindUniqueArgs";
import { CreateDiamondPriceArgs } from "./CreateDiamondPriceArgs";
import { UpdateDiamondPriceArgs } from "./UpdateDiamondPriceArgs";
import { DeleteDiamondPriceArgs } from "./DeleteDiamondPriceArgs";
import { OrganizationFindManyArgs } from "../../organization/base/OrganizationFindManyArgs";
import { Organization } from "../../organization/base/Organization";
import { DiamondPriceService } from "../diamondPrice.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DiamondPrice)
export class DiamondPriceResolverBase {
  constructor(
    protected readonly service: DiamondPriceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "DiamondPrice",
    action: "read",
    possession: "any",
  })
  async _diamondPricesMeta(
    @graphql.Args() args: DiamondPriceCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [DiamondPrice])
  @nestAccessControl.UseRoles({
    resource: "DiamondPrice",
    action: "read",
    possession: "any",
  })
  async diamondPrices(
    @graphql.Args() args: DiamondPriceFindManyArgs
  ): Promise<DiamondPrice[]> {
    return this.service.diamondPrices(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => DiamondPrice, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "DiamondPrice",
    action: "read",
    possession: "own",
  })
  async diamondPrice(
    @graphql.Args() args: DiamondPriceFindUniqueArgs
  ): Promise<DiamondPrice | null> {
    const result = await this.service.diamondPrice(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => DiamondPrice)
  @nestAccessControl.UseRoles({
    resource: "DiamondPrice",
    action: "create",
    possession: "any",
  })
  async createDiamondPrice(
    @graphql.Args() args: CreateDiamondPriceArgs
  ): Promise<DiamondPrice> {
    return await this.service.createDiamondPrice({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => DiamondPrice)
  @nestAccessControl.UseRoles({
    resource: "DiamondPrice",
    action: "update",
    possession: "any",
  })
  async updateDiamondPrice(
    @graphql.Args() args: UpdateDiamondPriceArgs
  ): Promise<DiamondPrice | null> {
    try {
      return await this.service.updateDiamondPrice({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => DiamondPrice)
  @nestAccessControl.UseRoles({
    resource: "DiamondPrice",
    action: "delete",
    possession: "any",
  })
  async deleteDiamondPrice(
    @graphql.Args() args: DeleteDiamondPriceArgs
  ): Promise<DiamondPrice | null> {
    try {
      return await this.service.deleteDiamondPrice(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Organization], { name: "organizations" })
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "read",
    possession: "any",
  })
  async findOrganizations(
    @graphql.Parent() parent: DiamondPrice,
    @graphql.Args() args: OrganizationFindManyArgs
  ): Promise<Organization[]> {
    const results = await this.service.findOrganizations(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
