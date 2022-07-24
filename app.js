const express = require('express');
const ejs = require('ejs');

const app = express();

const hostname = '127.0.0.1';
const port = 3000;

app
    .set('view engine', 'ejs')
    .set('views', './views')
    .use(express.static(__dirname))

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
