import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DiamondPriceServiceBase } from "./base/diamondPrice.service.base";

@Injectable()
export class DiamondPriceService extends DiamondPriceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
