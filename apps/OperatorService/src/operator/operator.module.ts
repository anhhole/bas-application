import { Module } from "@nestjs/common";
import { OperatorModuleBase } from "./base/operator.module.base";
import { OperatorService } from "./operator.service";
import { OperatorController } from "./operator.controller";
import { OperatorResolver } from "./operator.resolver";

@Module({
  imports: [OperatorModuleBase],
  controllers: [OperatorController],
  providers: [OperatorService, OperatorResolver],
  exports: [OperatorService],
})
export class OperatorModule {}
