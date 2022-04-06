const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// A `main` function so that you can use async/await
async function getReview(x) {
  const user = await prisma.review.findMany({
        where: {
            placeID: x,
        },
    });

    console.log(user);

    return user;
}



module.exports = {
  getReview: getReview
};