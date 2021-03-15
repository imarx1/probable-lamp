import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BiodataModule } from './biodata/biodata.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './app.database.module';
import { LinkedIdentityModule } from './linkedIdentity/linkedIdentity.module';

@Module({
  imports: [BiodataModule, LinkedIdentityModule,ConfigModule.forRoot(), DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
