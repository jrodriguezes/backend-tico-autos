import { Vehicle, VehicleDocument } from './schemas/vehicle.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateVehicleDto } from './dto/create-vehicle.dto';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectModel(Vehicle.name)
    private readonly vehicleModel: Model<VehicleDocument>,
  ) {}

  async create(dto: CreateVehicleDto) {
    const createdVehicle = await this.vehicleModel.create({
      ownerId: dto.ownerId,
      brand: dto.brand,
      model: dto.model,
      year: dto.year,
      price: dto.price,
      status: dto.status,
      observations: dto.observations,
      plateId: dto.plateId,
      imageUrl: dto.imageUrl,
    });

    return {
      _id: createdVehicle._id,
      ownerId: createdVehicle.ownerId,
      brand: createdVehicle.brand,
      model: createdVehicle.model,
      year: createdVehicle.year,
      price: createdVehicle.price,
      status: createdVehicle.status,
      observations: createdVehicle.observations,
      plateId: createdVehicle.plateId,
      imageUrl: createdVehicle.imageUrl,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }
}
