import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestResModule } from './test-res/test-res.module';
import { CatsController } from './cats/cats.controller';

@Module({
  imports: [TestResModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
