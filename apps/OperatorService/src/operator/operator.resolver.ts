import * as graphql from "@nestjs/graphql";
import { OperatorResolverBase } from "./base/operator.resolver.base";
import { Operator } from "./base/Operator";
import { OperatorService } from "./operator.service";

@graphql.Resolver(() => Operator)
export class OperatorResolver extends OperatorResolverBase {
  constructor(protected readonly service: OperatorService) {
    super(service);
  }
}
