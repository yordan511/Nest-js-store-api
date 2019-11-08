import {
  Controller,
  Get,
  Request,
  Post,
  UseGuards,
  Render,
  Response,
  Redirect,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Get('/login')
  @Render('login')
  loginRender() {
    return;
  }

  @Get('/register')
  @Render('register')
  registerRender() {
    return;
  }

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req, @Response() res) {
    try {
      const token = await this.authService.login(req.user);
      res
        .status(201)
        .set('Authorization', `Beader ${token.access_token}`)
        .redirect(301, '/');
      return token.access_token;
    } catch (e) {
      return e;
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Get('/')
  @Render('homepage')
  renderHomeage() {
    return;
  }
}
