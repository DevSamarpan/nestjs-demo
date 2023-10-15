import { Controller, Get } from '@nestjs/common';

@Controller('cats') // endpoint will be: /cats
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Get('breed') // endpoint will be: /cats/breed
  getBreed(): string {
    return 'This action returns breed of cats';
  }
}
