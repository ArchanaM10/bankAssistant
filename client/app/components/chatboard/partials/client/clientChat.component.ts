import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'client-chat',
    templateUrl: 'clientChat.component.html'
})

export class ClientChatComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    @Input() clientChatObj: any;
}