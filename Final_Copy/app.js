const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const places = require('./get.js');
const reviews = require('./getReviews.js');



// A `main` function so that you can use async/await
async function main(x) {
    const user = await prisma.images.findMany({
  where: {
    placeID: x,
  },
})

    //console.log(user);

    return user;
}

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));



app.use(express.static('public'));

app.get('/comments/:placeID', async (req, res) => {
    
        let imageurls = await main(parseInt(req.params.placeID))
            .catch(e => {
            throw e
        })
        .finally(async () => {
            await prisma.$disconnect()
        });

    console.log(imageurls);

    console.log(req.params.placeID);

    res.send(JSON.stringify(imageurls, null, 4));
});



app.get('/places', async (req, res) => {
    
    let t = await places.mainPlace();
    res.send(Object.values(t, null, 4));

});

app.get('/review/:placeID', async (req, res) => {
    
    let t = await reviews.getReview(parseInt(req.params.placeID))
    res.send(Object.values(t, null, 4));

});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.get('/', (req, res) => {
    res.send('Hello Group!');
});

app.listen(PORT, () => 
    console.log(`Server listening on port: ${PORT}`)
);

