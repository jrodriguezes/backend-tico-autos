import { AuthService } from './auth.service';
import { Controller, Post, Body } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() body: { numberId: number; password: string }) {
    return this.authService.login(body.numberId, body.password);
  }
}
