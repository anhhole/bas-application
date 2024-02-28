/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrganizationUpdateManyWithoutDiamondPricesInput } from "./OrganizationUpdateManyWithoutDiamondPricesInput";
import { ValidateNested, IsOptional, IsInt } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DiamondPriceUpdateInput {
  @ApiProperty({
    required: false,
    type: () => OrganizationUpdateManyWithoutDiamondPricesInput,
  })
  @ValidateNested()
  @Type(() => OrganizationUpdateManyWithoutDiamondPricesInput)
  @IsOptional()
  @Field(() => OrganizationUpdateManyWithoutDiamondPricesInput, {
    nullable: true,
  })
  organizations?: OrganizationUpdateManyWithoutDiamondPricesInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  value?: number;
}

export { DiamondPriceUpdateInput as DiamondPriceUpdateInput };
