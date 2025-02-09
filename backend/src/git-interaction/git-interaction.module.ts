import { Module } from '@nestjs/common';
import { GitInteractionController } from './git-interaction.controller';
import { GitInteractionService } from './git-interaction.service';
import { DatabaseModule } from 'src/database/database.module';
import { RedisCacheModule } from 'src/redis-cache/redis-cache.module';

@Module({
  controllers: [GitInteractionController],
  providers: [GitInteractionService],
  imports: [DatabaseModule, RedisCacheModule],
  exports: [GitInteractionService],
})
export class GitInteractionModule {}
