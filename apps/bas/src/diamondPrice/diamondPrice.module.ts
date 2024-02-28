import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DiamondPriceModuleBase } from "./base/diamondPrice.module.base";
import { DiamondPriceService } from "./diamondPrice.service";
import { DiamondPriceResolver } from "./diamondPrice.resolver";

@Module({
  imports: [DiamondPriceModuleBase, forwardRef(() => AuthModule)],
  providers: [DiamondPriceService, DiamondPriceResolver],
  exports: [DiamondPriceService],
})
export class DiamondPriceModule {}
