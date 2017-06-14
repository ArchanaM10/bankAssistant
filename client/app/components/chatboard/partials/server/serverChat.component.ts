import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'server-chat',
    templateUrl: 'serverChat.component.html'
})

export class ServerChatComponent implements OnInit {
    constructor() { }

    ngOnInit() { 
        console.log('serverChatObj : ', this.serverChatObj);
    }

    @Input() serverChatObj: any;

    
}