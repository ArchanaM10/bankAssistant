'use strict';
var express = require('express');
var router = express.Router();
require('dotenv').config();

router.use('/api/conversation', require('./app/conversation/conversation.controller'));

router.use('/api/textToSpeech', require('./app/textToSpeech/tts.controller'));

router.use('/api/SpeechToText', require('./app/speechToText/stt.controller'));

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;