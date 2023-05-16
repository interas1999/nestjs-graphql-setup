import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { AuthConfig } from '../../config/auth'
import { DatabaseModule } from '../database/database.module'
import { JwtStrategy } from './auth/jwt.strategy'
import { UserResolver } from './user.resolver'
import { UserService } from './user.service'
import { UserRepository } from './repositories/user.repository'

@Module({
  imports: [
    JwtModule.register({
      secret: AuthConfig.secret,
    }),
    DatabaseModule,
  ],
  providers: [UserResolver, UserService, UserRepository, JwtStrategy],
  controllers: [],
})
export class UserModule {}
