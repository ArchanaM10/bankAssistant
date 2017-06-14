var express = require('express');
var router = express.Router();
var vcapServices = require('vcap_services');
var extend = require('util')._extend;
var watson = require('watson-developer-cloud');

var sttConfig = extend({
    version: 'v1',
    url: process.env.STT_URL,
    username: process.env.STT_USERNAME,
    password: process.env.STT_PASSWORD
}, vcapServices.getCredentials('speech_to_text'));

var sttAuthService = watson.authorization(sttConfig);

router.get('/token', function (req, res) {
    sttAuthService.getToken({ url: sttConfig.url }, function (err, token) {
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
