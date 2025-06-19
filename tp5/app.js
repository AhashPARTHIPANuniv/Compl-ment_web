import express from 'express';

const app = express();

app.listen(3000, () => {
  console.log('Notre app express écoute sur le port 3000')
});

app.get('/', (requete, reponse) => {
  console.log('Requete GET / reçue');
  reponse.send('Hello World!')
})

app.get('/miaou', async (requete, reponse) => {
  console.log("Requete GET /miaou reçu");
  reponse.send(`
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Miaou</title>
    </head>
    <body>
        <h1>Miaou</h1>
        <img src = "https://moodle.iutv.univ-paris13.fr/img/bjs2/chat2.svg">
    </body>
    </html>
    `);
  });
