var express = require('express');
var router = express.Router();
// var conversation = require('./conversation.model.js');
var watson = require('watson-developer-cloud');

var context = {};
var conversation = watson.conversation({
    username: process.env.BANK_BOT_USERNAME,
    password: process.env.BANK_BOT_PASSWORD,
    version: 'v1',
    version_date: '2017-05-26'
});
var chatResponseArray = [];


/******************** */
    //Text to speech
  /*  var TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1');
    var fs = require('fs');

    console.log('TTS : ', process.env.TTS_URL);

    var textToSpeech = new TextToSpeechV1({
        version: 'v1',
        url: process.env.TTS_URL,
        username: process.env.TTS_USERNAME,
        password: process.env.TTS_PASSWORD,
        headers: {
            'X-Watson-Learning-Opt-Out': 'true'
        }
    });

    var params = {
        text: 'Hello from IBM Watson',
        voice: 'en-US_AllisonVoice', // Optional voice
        accept: 'audio/wav'
    };*/

/************ */


router.post('/message', function (req, res) {
    // console.log('on message routing : ', req.body);
    // console.log('on message routing : ', req.body.msg);
    chatResponseArray = [];
    conversation.message({
        workspace_id: process.env.BANK_BOT_WORKSPACE_ID,
        input: { 'text': req.body.msg },
        context: context
    }, function (err, response) {
        if (err) {
            console.log('error:', err);
            res.status(500).send(err)
        }
        else {
            // console.log('response : ',JSON.stringify(response, null, 2));
            // console.log('response : ',response);
            // console.log('response : ', response.output.text[0]);
            response.output.text.forEach(function(value, index){
                if(value != ''){
                    chatResponseArray.push(value);
                }
                if(response.output.text.length-1 == index){
                    // Pipe the synthesized text to a file
                    // textToSpeech.synthesize(params).pipe(fs.createWriteStream('output.wav'));
                    res.send({res: chatResponseArray});
                }
            });
        }
    });
});

module.exports = router;