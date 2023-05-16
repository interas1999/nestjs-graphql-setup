import { Module } from '@nestjs/common'
import { BullModule } from '@nestjs/bull'
import { ConfigModule } from '@nestjs/config'
import { DatabaseModule } from './modules/database/database.module'
import { HttpModule } from './modules/http/http.module'
import { UserModule } from '@modules/user/user.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    BullModule.forRootAsync({
      useFactory: () => ({
        redis: {
          host: process.env.REDIS_HOST || 'localhost',
          port: +process.env.REDIS_PORT || 6379,
        },
      }),
    }),
    DatabaseModule,
    HttpModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
