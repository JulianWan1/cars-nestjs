import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ShowroomService } from './showroom.service';

@Controller('cars')
export class ShowroomController {
  constructor(private readonly showRoomService: ShowroomService) {}

  @Post()
  addCar(
    @Body('brand') carBrand: string,
    @Body('country') carCountry: string,
    @Body('price') carPrice: number,
  ) {
    const generateID = this.showRoomService.handleAddCar(
      carBrand,
      carCountry,
      carPrice,
    );
    return { id: generateID };
  }

  @Get()
  getAllCars() {
    return this.showRoomService.handleGetAllCars();
  }

  @Get(':id')
  getSpecificCar(@Param('id') carID: string) {
    return this.showRoomService.handleGetSpecificCar(carID);
  }

  @Patch(':id')
  updateSpecificCar(
    @Param('id') carID: string,
    @Body('brand') carBrand: string,
    @Body('country') carCountry: string,
    @Body('price') carPrice: number,
  ) {
    this.showRoomService.handleUpdateSpecificCar(
      carID,
      carBrand,
      carCountry,
      carPrice,
    );
    return { status: 'Updated' };
  }

  @Delete(':id')
  deleteSpecificCar(@Param('id') carID: string) {
    this.showRoomService.handleDeleteSpecificCar(carID);
  }
}
