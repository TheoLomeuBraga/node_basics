const app = require('express')();

function print(text){
    console.log(text)
}

print("hello world")

app.get("/get_a",(req, res) => {
    res.send("a")
});

app.listen(3000);