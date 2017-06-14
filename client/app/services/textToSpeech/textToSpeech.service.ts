import { Injectable } from '@angular/core';
import { GETHTTPService } from '../../services/http/get.httpService';

@Injectable()
export class TextToSpeechService {

    cacheTTSToken: string;

    constructor(private getHTTPService: GETHTTPService) { }

    getSpeech(speechText: string): void {
        console.log('in getSpeech : ', speechText);
        let token: string = this.cacheTTSToken;
        if (token) {
            this.textToSpeech(token, speechText);
        } else {
            this.getHTTPService.getData('/api/textToSpeech/token')
                .subscribe((data:any) => {
                    console.log('data in textToSpeech: ', data);
                    this.cacheTTSToken = data.token;
                    this.textToSpeech(data.token, speechText);
                });
        }
    }

    textToSpeech(token: string, text: string): void {
        console.log('in textToSpeech : ', text);
        let watsonSpeech = require( "watson-speech" );
        let audio = watsonSpeech.TextToSpeech.synthesize( {
            text: text,
            voice: 'en-US_MichaelVoice',
            token: token
        });

        console.log('audio : ', audio);

        audio.play();  
        audio.addEventListener('play', function() {
            console.log('playing audio');
        }, 0);

    }
}