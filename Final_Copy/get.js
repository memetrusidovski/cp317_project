const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// A `main` function so that you can use async/await
async function mainPlace() {
  const user = await prisma.place.findMany();

    console.log(user);

    return user;
}



module.exports = {
  mainPlace: mainPlace
};