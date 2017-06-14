var express = require('express');
var router = express.Router();
var vcapServices = require('vcap_services');
var extend = require('util')._extend;
var watson = require('watson-developer-cloud');

var ttsConfig = extend({
    version: 'v1',
    url: process.env.TTS_URL,
    username: process.env.TTS_USERNAME,
    password: process.env.TTS_PASSWORD
}, vcapServices.getCredentials('text_to_speech'));

var ttsAuthService = watson.authorization(ttsConfig);

router.get('/token', function (req, res) {
    ttsAuthService.getToken({ url: ttsConfig.url }, function (err, token) {
        if (err) {
            console.log('Error retrieving token: ', err);
            return res.status(500).send('Error retrieving token')
        }
        console.log('token : ', token);
        // res.set('Content-Type', 'text/plain').send(token);
        res.send({token: token});
    });
});

module.exports = router;
