import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OperatorModuleBase } from "./base/operator.module.base";
import { OperatorService } from "./operator.service";
import { OperatorResolver } from "./operator.resolver";

@Module({
  imports: [OperatorModuleBase, forwardRef(() => AuthModule)],
  providers: [OperatorService, OperatorResolver],
  exports: [OperatorService],
})
export class OperatorModule {}
