import { Component, OnInit } from '@angular/core';
import { Chat } from './chatboard.interface';
import { POSTHTTPService } from '../../services/http/post.httpService';
import { TextToSpeechService } from '../../services/textToSpeech/textToSpeech.service';

@Component({
    selector: 'chat-board',
    templateUrl: './chatboard.component.html',
    styleUrls: ['./chatboard.component.css'],
    providers: [POSTHTTPService, TextToSpeechService]
})

export class ChatboardComponent implements OnInit {

    chatBotMsgURL: string = 'http://localhost:8080/api/conversation/message';
    chat: Chat = {
        chatText: '',
        chatArray: []
    };
    isTyping: boolean = false;

    constructor(
        private postHTTPService: POSTHTTPService,
        private textToSpeechService: TextToSpeechService
    ) { }

    ngOnInit() {
        this.getResponseFromChatBot({ msg: '' });
    }

    sendChatMessage(msg: any): void {
        // console.log('in sendChatMessage : ', msg);
        /*this.chatObj.msg = msg.chatText;
        this.chatObj.source = 'client';
        this.chat.chatArray.push(this.chatObj);*/
        let clientChatConfig: any = {
            msg: msg.chatText,
            source: 'client'
        };
        this.chat.chatArray.push(clientChatConfig);
        console.log('at client side this.chat.chatArray : ', this.chat.chatArray);
        this.chat.chatText = '';
        this.getResponseFromChatBot({ msg: msg.chatText });
    }

    getResponseFromChatBot(payload: any): void {
        this.isTyping = true;
        this.postHTTPService.postData(this.chatBotMsgURL, payload).subscribe(
            data => {
                console.log('data : ', data);
                this.isTyping = false;
                // this.chatObj.msg = data.res;
                // this.chatObj.source = 'server1';
                let serverChatConfig: any = {
                    msg: data.res,
                    source: 'server'
                };
                // this.chat.chatArray.push(this.chatObj);
                this.chat.chatArray.push(serverChatConfig);
                this.textToSpeechService.getSpeech(serverChatConfig.msg);
                console.log('at server side this.chat.chatArray : ', this.chat.chatArray);
            });
    }
}