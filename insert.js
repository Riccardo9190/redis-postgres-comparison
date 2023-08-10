require("dotenv").config();

const { faker } = require("@faker-js/faker");
const pgp = require("pg-promise")();
const db = pgp(process.env.DATABASE_URL);

async function insert() {
  for (let i = 0; i < 100000; i++) {
    await db.query(
      "INSERT INTO clients (name, age, state) values (${name}, ${age}, ${state})",
      {
        name: faker.person.firstName(),
        age: Math.floor(Math.random() * 100),
        state: faker.location.state(),
      }
    );
  }
  await db.$pool.end();
}

insert();
