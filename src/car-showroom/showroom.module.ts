import { Module } from '@nestjs/common';
import { ShowroomController } from './showroom.controller';
import { ShowroomService } from './showroom.service';

@Module({
  controllers: [ShowroomController],
  providers: [ShowroomService],
})
export class ShowRoomModule {}
