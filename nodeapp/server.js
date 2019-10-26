const express = require('express')
var fs = require("fs");
var bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json())
app.use (express.urlencoded({extended: false}))
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Content-Type, Accept");
   next();
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

//Take the image send it to google to identify the object then
app.post('/image',(req,res) =>{
  var name = req.body.name;
  var img = req.body.image;
  var realFile = Buffer.from(img,"base64");
  fs.writeFile(name, realFile, function(err) {
      if(err)
         console.log(err);
   });
   res.send("OK");

});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
  
});