import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();

let port = 8080;

// SETUP MIDDLEWARE
app.use(bodyParser.json());

// SERVE STATIC FILES - REACT PROJECT
console.log(path.resolve(__dirname, '../public'));
app.use('/', express.static(path.resolve(__dirname, '../public')));

app.use('/test', (req, res) => {
    res.json('hi');
});

// LOAD API FROM ROUTES
// TO BE IMPLEMENTED

app.listen(port, () => {
    console.log('Express is listening on port', port);
});