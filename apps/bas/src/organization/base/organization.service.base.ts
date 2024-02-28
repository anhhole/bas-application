/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Organization, // @ts-ignore
  Operator, // @ts-ignore
  Order, // @ts-ignore
  DiamondPrice,
} from "@prisma/client";

export class OrganizationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.OrganizationCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationCountArgs>
  ): Promise<number> {
    return this.prisma.organization.count(args);
  }

  async organizations<T extends Prisma.OrganizationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationFindManyArgs>
  ): Promise<Organization[]> {
    return this.prisma.organization.findMany(args);
  }
  async organization<T extends Prisma.OrganizationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationFindUniqueArgs>
  ): Promise<Organization | null> {
    return this.prisma.organization.findUnique(args);
  }
  async createOrganization<T extends Prisma.OrganizationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationCreateArgs>
  ): Promise<Organization> {
    return this.prisma.organization.create<T>(args);
  }
  async updateOrganization<T extends Prisma.OrganizationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationUpdateArgs>
  ): Promise<Organization> {
    return this.prisma.organization.update<T>(args);
  }
  async deleteOrganization<T extends Prisma.OrganizationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationDeleteArgs>
  ): Promise<Organization> {
    return this.prisma.organization.delete(args);
  }

  async findOperators(
    parentId: string,
    args: Prisma.OperatorFindManyArgs
  ): Promise<Operator[]> {
    return this.prisma.organization
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .operators(args);
  }

  async findOrders(
    parentId: string,
    args: Prisma.OrderFindManyArgs
  ): Promise<Order[]> {
    return this.prisma.organization
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .orders(args);
  }

  async getDiamondPrice(parentId: string): Promise<DiamondPrice | null> {
    return this.prisma.organization
      .findUnique({
        where: { id: parentId },
      })
      .diamondPrice();
  }
}
