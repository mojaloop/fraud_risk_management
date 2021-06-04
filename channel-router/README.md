# channel-router

This is a channel-router for a OpenFaas function. 

## Setup
Just copy this project to create your own, and change the name of the project inside the package.json.

## Env variables
Environment variables can be configured in `src/config/index.ts`. You can add or remove the variables you want, like Redis or ArangoDB.

## Starting the server
You can run `yarn run dev` to start a development server that will reload on every change you make.

Alternatively, running `yarn build` will create the compiled files for you to run the project in production mode using `yarn start`. 

## Adding Routes
To add a route, you'll need to add a controller function inside `/src/controllers/`. Creating a file that handles multiple requests (like posts, gets, puts, etc) is recommended. Then add attach that controller to a route inside `src/routes.ts`. Remember to import the module.

## Adding Middlewares
If you need to add a middleware (Arango, Swagger, etc), you can add it inside `src/app.ts`, in `configureRoutes`, where all the other middlewares are loaded, just like Redis:
```
if (redisConnection) {
    const redisClient = await initializeRedis(
    redisDB,
    redisHost,
    redisPort,
    redisAuth,
    );
    this.use((ctx, next) => {
    ctx.state.redisClient = redisClient;
    return next();
    });
}
```

You can now use the middleware from your controller using `ctx.state.redisClient`

## Testing
This project uses Husky to run tests on every commit. the `yarn test` command will run linter, prettier and tests. If requirements are not met, Husky won't allow you to make a commit. you can run `git commit -m "comment" --no-verify` to commit your work in progress. 