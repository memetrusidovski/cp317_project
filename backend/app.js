const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const places = require('./get.js');



// A `main` function so that you can use async/await
async function main(x) {
    const user = await prisma.images.findMany({
  where: {
    placeID: x,
  },
})

    console.log(user);
}



app.use(express.static('public'));

app.get('/comments/:placeID', (req, res) => {
    
    main(parseInt(req.params.placeID))
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  });

    console.log(req.params.placeID);
    res.send('Hello World!');
});

app.get('/places', (req, res) => {
    places.mainPlace();
    res.send('Hello Place!');
});

app.get('/', (req, res) => {
    
    res.send('Hello Group!');
});
app.listen(PORT, () => 
    console.log(`Server listening on port: ${PORT}`)
);

