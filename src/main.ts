import { NestApplication, NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { Logger } from '@nestjs/common'

async function bootstrap() {
  const PORT = process.env.PORT || 7801

  const app = await NestFactory.create(AppModule)
  await app.listen(PORT).then(() => {
    const logger = new Logger(NestApplication.name)
    logger.log(`[MEDUSA] HTTP server listening at port ${PORT}`)
  })
}
bootstrap()
