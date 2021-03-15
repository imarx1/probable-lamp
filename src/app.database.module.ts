import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {ConfigModule, ConfigService} from '@nestjs/config'
import {BiodataModule} from './biodata/biodata.module'
import { LinkedIdentityModule } from './linkedIdentity/linkedIdentity.module';



@Module({
    imports: [
      TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
          type: 'postgres',
          name: 'default',
          host: configService.get('POSTGRES_HOST', 'localhost'),
          port: configService.get('POSTGRES_PORT', 5432),
          username: configService.get('POSTGRES_USER', 'postgres'),
          password: configService.get('POSTGRES_PASSWORD', 'goatmessi'),
          database: configService.get('POSTGRES_DB', 'biodata-form'),
          entities: ['dist/**/*.entity{.ts,.js}'],
          synchronize: true,
          autoLoadEntities: true,
        }),
      }),  ],
  })

  export class DatabaseModule {}
  