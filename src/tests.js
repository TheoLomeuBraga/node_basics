const app = require('express')();

function print(text){
    console.log(text)
}

print("hello world")

app.get("/user",(req, res) => {
   res.status(200).send('Rota GET!');
});