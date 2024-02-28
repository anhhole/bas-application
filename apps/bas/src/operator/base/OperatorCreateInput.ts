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
import {
  IsString,
  IsOptional,
  IsInt,
  IsEnum,
  ValidateNested,
  IsDate,
} from "class-validator";
import { EnumOperatorOperatorRole } from "./EnumOperatorOperatorRole";
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class OperatorCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  bigoId?: string | null;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  diamondsAmount!: number;

  @ApiProperty({
    required: true,
    enum: EnumOperatorOperatorRole,
  })
  @IsEnum(EnumOperatorOperatorRole)
  @Field(() => EnumOperatorOperatorRole)
  operatorRole!: "Employee" | "Agent";

  @ApiProperty({
    required: true,
    type: () => OrganizationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrganizationWhereUniqueInput)
  @Field(() => OrganizationWhereUniqueInput)
  organization!: OrganizationWhereUniqueInput;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  userName?: string | null;
}

export { OperatorCreateInput as OperatorCreateInput };