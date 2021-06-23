const seedArmor = require('./armorSeeds');
const seedUsers = require('./userSeeds');
const seedWeapons = require('./WeaponSeeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
      console.log('\n----- DATABASE SYNCED -----\n');

    await seedUsers();
      console.log('\n----- USERS SEEDED -----\n')

    await seedWeapons();
      console.log('\n----- WEAPONS SEEDED -----\n');

    await seedArmor();
      console.log('\n----- ARMOR SEEDED -----\n')

    process.exit(0);
};

seedAll();

