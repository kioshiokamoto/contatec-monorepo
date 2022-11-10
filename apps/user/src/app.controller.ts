import { Body, Controller, Get, Param } from '@nestjs/common';
import { Patch, Post, Req, Res } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';

import { ActivateEmailDto, CreateUserDto, ForgotPasswordDto } from './dtos';
import { LoginDto, ResetPasswordDto, UpdateUserDto } from './dtos';
import { AppService } from './app.service';
@ApiTags('User')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/register')
  @ApiOperation({ summary: 'Registrar usuario' })
  @ApiResponse({ status: 201, description: 'Se envio correo' })
  @ApiResponse({ status: 409, description: 'Ocurrio un conflicto' })
  register(@Body() dto: CreateUserDto) {
    console.log('Se registra!');
    return this.appService.register(dto);
  }

  @Post('/activation')
  @ApiOperation({ summary: 'Activacion de usuario' })
  activateEmail(@Body() dto: ActivateEmailDto) {
    return this.appService.activateEmail(dto);
  }

  @Post('/forgot')
  @ApiOperation({ summary: 'Solicitar token de reseteo de contraseña' })
  forgotPassword(@Body() dto: ForgotPasswordDto) {
    return this.appService.forgotPassword(dto);
  }

  @Post('/reset')
  @ApiBearerAuth('Authorization')
  @ApiOperation({ summary: 'Cambiar contraseña de usuario' })
  resetPassword(@Req() req: Request, @Body() dto: ResetPasswordDto) {
    return this.appService.resetPassword(req);
  }

  @Post('/login')
  @ApiOperation({ summary: 'Inicio de sesión' })
  login(@Body() dto: LoginDto, @Res({ passthrough: true }) res: Response) {
    return this.appService.login(dto, res);
  }

  @Post('/refresh_token')
  @ApiOperation({ summary: 'Obtener access token' })
  getAccessToken(@Req() req: Request) {
    return this.appService.getAccessToken(req);
  }

  @Get('/logout')
  @ApiOperation({ summary: 'Cerrar sesión' })
  logout(@Res() res: Response) {
    return this.appService.logout(res);
  }

  @Get('/info')
  @ApiOperation({ summary: 'Obtener información de usuario' })
  @ApiBearerAuth('Authorization')
  getUserInfo(@Req() req: Request) {
    return this.appService.getUserInfo(req);
  }

  @Get('/info/:id')
  @ApiOperation({ summary: 'Obtener información de usuario por id' })
  @ApiBearerAuth('Authorization')
  getUserInfoById(@Req() req: Request, @Param('id') param: number) {
    return this.appService.getUserInfoById(req, param);
  }

  @Patch('/update')
  @ApiOperation({ summary: 'Actualizar información de usuario' })
  @ApiBearerAuth('Authorization')
  updateUser(@Body() dto: UpdateUserDto, @Req() req: Request) {
    return this.appService.updateUser(dto, req);
  }
}
