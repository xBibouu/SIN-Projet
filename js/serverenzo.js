const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

let ouvrir = 0;
let fermer = 0;
let lancer = 0;
let gauche = 0;
let droite = 0;
let haut = 0;
let bas = 0;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send({ moteurfermer: fermer, moteurouvrir: ouvrir, moteurlancer: lancer, gauche, droite, haut, bas });
});

app.post('/update-ouvrir', (req, res) => {
    if (req.body.moteurouvrir !== undefined) {
        fermer = 0;
        ouvrir = 1;
        res.send({ moteurfermer: fermer, moteurouvrir: ouvrir });
    } else {
        res.status(400).send({ success: false, message: 'Invalid input' });
    }
});

app.post('/update-fermer', (req, res) => {
    if (req.body.moteurfermer !== undefined) {
        ouvrir = 0;
        fermer = 1;
        res.send({ moteurfermer: fermer, moteurouvrir: ouvrir });
    } else {
        res.status(400).send({ success: false, message: 'Invalid input' });
    }
});

app.post('/update-lancer', (req, res) => {
    if (req.body.moteurlancer !== undefined) {
        lancer = 1;
        res.send({ moteurlancer: lancer });
    } else {
        res.status(400).send({ success: false, message: 'Invalid input' });
    }
});

app.post('/update-direction', (req, res) => {
    const direction = req.body.direction;
    if (direction) {
        gauche = droite = haut = bas = 0; 
        if (direction === 'gauche') gauche = 1;
        else if (direction === 'droite') droite = 1;
        else if (direction === 'haut') haut = 1;
        else if (direction === 'bas') bas = 1;
        res.send({ gauche, droite, haut, bas });
    } else {
        res.status(400).send({ success: false, message: 'Invalid input' });
    }
});

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});

setInterval(() => {
    ouvrir = 0;
    fermer = 0;
    lancer = 0;
    gauche = 0;
    droite = 0;
    haut = 0;
    bas = 0;
}, 2000);
