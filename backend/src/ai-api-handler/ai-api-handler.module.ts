import { Module } from '@nestjs/common';  
import { AiApiHandlerService } from './ai-api-handler.service';  
import { AiApiHandlerController } from './ai-api-handler.controller';  

@Module({  
  controllers: [AiApiHandlerController],  
  providers: [AiApiHandlerService],  
  exports: [AiApiHandlerService]  
})  
export class AiApiHandlerModule {}