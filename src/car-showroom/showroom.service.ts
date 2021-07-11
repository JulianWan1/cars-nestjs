import { Injectable, NotFoundException } from '@nestjs/common';
import { ShowroomCar } from './showroom.model';

@Injectable()
export class ShowroomService {
  private carList: ShowroomCar[] = [];

  handleAddCar(brand: string, country: string, price: number) {
    const carID = Math.random().toString();
    const newCar = new ShowroomCar(carID, brand, country, price);
    this.carList.push(newCar);
    return carID;
  }

  handleGetAllCars() {
    return [...this.carList];
  }

  handleGetSpecificCar(carID: string) {
    const selectedCar = this.findCar(carID)[0];
    return { ...selectedCar };
  }

  handleUpdateSpecificCar(
    carID: string,
    brand: string,
    country: string,
    price: number,
  ) {
    const [selectedCar, carIndex] = this.findCar(carID);
    const updatedCar = { ...selectedCar };
    if (brand) {
      updatedCar.brand = brand;
    }
    if (country) {
      updatedCar.country = country;
    }
    if (price) {
      updatedCar.price = price;
    }
    this.carList[carIndex] = updatedCar;
  }

  handleDeleteSpecificCar(carID: string) {
    const carIndex = this.findCar(carID)[1];
    this.carList.splice(carIndex, 1);
  }

  private findCar(id: string): [ShowroomCar, number] {
    const carIndex = this.carList.findIndex((car) => car.id === id);
    const car = this.carList[carIndex];
    if (!car) {
      throw new NotFoundException('Could not find car...');
    }
    return [car, carIndex];
  }
}
