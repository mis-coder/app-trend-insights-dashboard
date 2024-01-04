const { db } = require('@vercel/postgres');
const fs = require('fs').promises;

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "apps" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS apps (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        category VARCHAR(255) NOT NULL,
        rating DECIMAL(3, 1),
        size VARCHAR(20),
        reviews INT,
        type VARCHAR(10),
        installs VARCHAR(100),
        contentRating VARCHAR(50),
        price VARCHAR(50),
        lastUpdated DATE,
        genres VARCHAR(255),
        currentVer VARCHAR(50),
        androidVer VARCHAR(50)
      );
    `;

    console.log(`Created "apps" table`);

    //I have data in the following file
    const file =  await fs.readFile(process.cwd() + '/data/appInfo.json', 'utf-8');

    const data = await JSON.parse(file);

    // Insert data into the "apps" table
    const insertedApps = await Promise.all(
      data.map(async (app) => {
        const {name, category, rating, reviews, size, installs, type, price, contentRating, genres, lastUpdated, currentVer, androidVer} = app;
        return client.sql`
        INSERT INTO apps (name, category, rating, reviews, size, installs, type, price, contentRating, genres, lastUpdated, currentVer, androidVer)
        VALUES (${name}, ${category}, ${rating}, ${reviews}, ${size}, ${installs}, ${type}, ${price}, ${contentRating}, ${genres}, ${lastUpdated}, ${currentVer}, ${androidVer});
      `;
      }),
    );

    console.log(`Seeded ${insertedApps.length} apps`);

    return {
      createTable,
      apps: insertedApps,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}


async function main() {
  const client = await db.connect();

  await seedUsers(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});