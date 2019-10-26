const express = require('express')
var fs = require("fs");
var bodyParser = require("body-parser");
const app = express();

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