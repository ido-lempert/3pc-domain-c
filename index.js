const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use((req,res, next)=>{
    res.cookie('X-Domain-A', `**${Math.floor(Math.random()*100000)}**`, {
        path: '/',
        sameSite: 'none',
        secure: true,
        maxAge: 24 * 60 * 60 * 1000
    });
    next();
});

app.use(express.static('public'));

app.get('/', (req, res) => {

    res.send('Hello domain-a');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})