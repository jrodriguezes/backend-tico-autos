import {
  IsInt,
  IsNotEmpty,
  IsString,
  Min,
  MinLength,
  MaxLength,
} from 'class-validator';

export class UpdateVehicleDto {
  @IsInt()
  @Min(1)
  ownerId: number;

  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsString()
  @IsNotEmpty()
  model: string;

  @IsInt()
  @IsNotEmpty()
  year: number;

  @IsInt()
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsString()
  observations: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(7)
  @MaxLength(7)
  plateId: string;

  @IsString()
  @IsNotEmpty()
  imageUrl: string;
}
