/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BalanceWhereUniqueInput } from "./BalanceWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class BalanceFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => BalanceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BalanceWhereUniqueInput)
  @Field(() => BalanceWhereUniqueInput, { nullable: false })
  where!: BalanceWhereUniqueInput;
}

export { BalanceFindUniqueArgs as BalanceFindUniqueArgs };
