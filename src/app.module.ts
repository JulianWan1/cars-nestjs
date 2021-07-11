import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShowRoomModule } from './car-showroom/showroom.module';

@Module({
  imports: [ShowRoomModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
