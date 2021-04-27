import { ApolloServer } from "apollo-server-express";
import express from "express";
import { buildSchema } from "type-graphql";
import path from "path";
import "reflect-metadata";
import { createConnection } from "typeorm";
import { Recipe } from "./entities/Recipe";
import { User } from "./entities/User";
import { UserResolver } from "./resolvers/user";
import session from "express-session";
import redis from "redis";
import connectRedis from "connect-redis";
import { RecipeResolver } from "./resolvers/recipe";
import cors from "cors";

const main = async () => {
  const conn = await createConnection({
    type: "postgres",
    username: "postgres",
    password: "postgres",
    database: "cooking-app",
    entities: [Recipe, User],
    synchronize: true,
    logging: true,
    migrations: [path.join(__dirname, "./migrations/*")],
  });
  conn.runMigrations();

  const app = express();

  const RedisStore = connectRedis(session);
  const redisClient = redis.createClient();

  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

  app.use(
    session({
      secret: "hgakldsfjlasdj",
      name: "qid",
      store: new RedisStore({ client: redisClient, disableTouch: true }),
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24,
        secure: false,
        sameSite: "lax",
      },
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver, RecipeResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({
      req,
      res,
    }),
  });

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.listen(4000, () => {
    console.log("server started on localhost:4000");
  });
};

main().catch((err) => {
  console.error(err);
});
