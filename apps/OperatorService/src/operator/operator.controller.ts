import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OperatorService } from "./operator.service";
import { OperatorControllerBase } from "./base/operator.controller.base";

@swagger.ApiTags("operators")
@common.Controller("operators")
export class OperatorController extends OperatorControllerBase {
  constructor(protected readonly service: OperatorService) {
    super(service);
  }
}
