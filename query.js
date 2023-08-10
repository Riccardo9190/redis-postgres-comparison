require("dotenv").config();

async function query() {
  const asyncRedis = require("async-redis");
  const redis = asyncRedis.createClient();
  const pg = require("pg-promise")();
  const queryTime = 1000;
  const db = pg(process.env.DATABASE_URL);
  const idClient = 20;

  console.time("Redis");

  for (let i = 0; i < queryTime; i++) {
    let clientCache = await redis.get(`${idClient}`);

    if (!clientCache) {
      const client = await db.query(
        "SELECT * from clients where id = 20 limit 1"
      );
      redis.set(`${idClient}`, JSON.stringify(client));
      clientCache = client;
    }
  }

  console.timeEnd("Redis");

  console.time("Postgresql");

  for (let i = 0; i < queryTime; i++) {
    await db.query("SELECT * from clients where id = 20 limit 1");
  }

  console.timeEnd("Postgresql");

  await db.$pool.end();

  await redis.flushall();
  await redis.quit();
}

query();
