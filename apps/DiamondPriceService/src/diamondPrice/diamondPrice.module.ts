import { Module } from "@nestjs/common";
import { DiamondPriceModuleBase } from "./base/diamondPrice.module.base";
import { DiamondPriceService } from "./diamondPrice.service";
import { DiamondPriceController } from "./diamondPrice.controller";
import { DiamondPriceResolver } from "./diamondPrice.resolver";

@Module({
  imports: [DiamondPriceModuleBase],
  controllers: [DiamondPriceController],
  providers: [DiamondPriceService, DiamondPriceResolver],
  exports: [DiamondPriceService],
})
export class DiamondPriceModule {}
