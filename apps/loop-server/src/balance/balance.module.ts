import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BalanceModuleBase } from "./base/balance.module.base";
import { BalanceService } from "./balance.service";
import { BalanceController } from "./balance.controller";
import { BalanceResolver } from "./balance.resolver";

@Module({
  imports: [BalanceModuleBase, forwardRef(() => AuthModule)],
  controllers: [BalanceController],
  providers: [BalanceService, BalanceResolver],
  exports: [BalanceService],
})
export class BalanceModule {}
