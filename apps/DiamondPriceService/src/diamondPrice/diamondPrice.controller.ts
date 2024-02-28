import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DiamondPriceService } from "./diamondPrice.service";
import { DiamondPriceControllerBase } from "./base/diamondPrice.controller.base";

@swagger.ApiTags("diamondPrices")
@common.Controller("diamondPrices")
export class DiamondPriceController extends DiamondPriceControllerBase {
  constructor(protected readonly service: DiamondPriceService) {
    super(service);
  }
}
