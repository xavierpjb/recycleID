const express = require('express')
const fs = require("fs");
const bodyParser = require("body-parser");
const session = require('cookie-session');
const automl = require('@google-cloud/automl');
var config = require('./config');
const client = new automl.PredictionServiceClient(config);
//let config = { credentials: { private_key: privateKey, client_email: clientEmail } } 
//const sessionPath = sessionClient.sessionPath(projectId, sessionId); }

const projectId = "cycle-r";
const computeRegion = "us-central1";
const modelId = "ICN2577206876995321856";
  // const filePath = `local text file path of content to be classified, e.g. "./resources/flower.png"`;
const scoreThreshold = 0.5;

const modelFullId = client.modelPath(projectId, computeRegion, modelId);

const app = express();

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Content-Type, Accept");
    next();
});

// app.use(session({
//     secret: config.secret,
//     signed: true
// }));


// // OAuth2
// var oauth2 = require('./lib/oauth2')(config.oauth2);
// app.use(oauth2.router);
// app.use(oauth2.aware);
// app.use(oauth2.template);

app.get('/', (req, res) => {
    res.send('Hello World!')
});





//Take the image send it to google to identify the object then
app.post('/image', (req, res) => {
    var name = req.body.name;
    var img = req.body.image;
    var realFile = Buffer.from(img, "base64");
    // fs.writeFile(name, realFile, function (err) {
    //     if (err)
    //         console.log(err);
    // });
    // const content = fs.readFileSync(filePath, 'base64');

    const params = {};

    if (scoreThreshold) {
      params.score_threshold = scoreThreshold;
    }
  
    // Set the payload by giving the content and type of the file.
    const payload = {};
    payload.image = {imageBytes: img};
  
    // params is additional domain-specific parameters.
    // currently there is no additional parameters supported.
    // const [response] = await client.predict({
    //     name: modelFullId,
    //     payload: payload,
    //     params: params,
    //   });
    //   console.log(`Prediction results:`);
    //   response.payload.forEach(result => {
    //     console.log(`Predicted class name: ${result.displayName}`);
    //     console.log(`Predicted class score: ${result.classification.score}`);
    //   });
    sendToGo( modelFullId,payload,params,res);
    //res.send("OK");

});
async function sendToGo(modelFullId,payload,params,res){
     // params is additional domain-specific parameters.
    // currently there is no additional parameters supported.
    const [response] = await client.predict({
        name: modelFullId,
        payload: payload,
        params: params,
      });
      console.log(`Prediction results:`);
      response.payload.forEach(result => {
        console.log(`Predicted class name: ${result.displayName}`);
        console.log(`Predicted class score: ${result.classification.score}`);
      });
      //return 
      res.send(response.payload);//getting the stats of the image
}

app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
    

});