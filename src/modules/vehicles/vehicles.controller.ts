import { Body, Controller, Post, Patch, Param, Get } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';

@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Get()
  getAll() {
    return this.vehiclesService.getAllVehicles();
  }

  @Post()
  create(@Body() dto: CreateVehicleDto) {
    return this.vehiclesService.createVehicle(dto);
  }

  @Patch(':id')
  update(@Param('id') _id: string, @Body() dto: UpdateVehicleDto) {
    return this.vehiclesService.updateVehicle(_id, dto);
  }
}
