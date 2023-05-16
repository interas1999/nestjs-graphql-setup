import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo'
import { ApolloServerPluginInlineTraceDisabled } from 'apollo-server-core'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: 'src/schema.gql',
      plugins: [ApolloServerPluginInlineTraceDisabled],
      cors: {
        origin: '*',
      },
      playground: true,
      cache: 'bounded',
    }),
  ],
})
export class HttpModule {}
