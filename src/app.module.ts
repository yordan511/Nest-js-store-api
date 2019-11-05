import { ConfigModule } from './config/config.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OpinionsController } from './opinions/opinions.controller';
import { OpinionsService } from './opinions/opinions.service';
import { FoassService } from './foass/foass.service';
import { FoassController } from './foass/foass.controller';
import { FoassModule } from './foass/foass.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from './config/config.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule,
    FoassModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('MONGO_DB_CONNECT_STRING'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController, OpinionsController, FoassController],
  providers: [AppService, OpinionsService, FoassService],
})
export class AppModule {}
