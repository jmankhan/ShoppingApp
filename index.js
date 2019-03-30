const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

//production mode
if (process.env.NODE_ENV === 'PROD') {
    app.use(express.static(path.join(__dirname, 'react/')));
    app.get('/', (req, res) => {
        res.sendfile(path.join(__dirname = 'react/index.html'));
    })
}


//start server
app.listen(PORT, () => console.log(`Started on Port ${PORT}`));