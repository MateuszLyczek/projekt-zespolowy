import { getMongoDBInstance } from '../src/bin/server.ts';

afterAll(async () => {
    const mongoDB = getMongoDBInstance();

    await mongoDB.connection.close();
});