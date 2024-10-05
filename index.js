import express from 'express';
import { createHandler } from 'graphql-http/lib/use/express';
import { makeExecutableSchema } from '@graphql-tools/schema';
import db from './_db.js'
import { typeDefs } from './schema.js';

const app = express();
const port = 4000;

const resolvers = {
  Query: {
    games(){
      return db
    }
  }
}

const schema = makeExecutableSchema({ 
  typeDefs, resolvers 
});

app.use('/', createHandler({
  schema: schema
}));

app.listen(
  port,
  () => console.log("from ", port)
)