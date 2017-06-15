import { Injectable } from '@angular/core';

@Injectable()
export class ENVConfig {

    // domainName: string;
    constructor() { }

    getDomainName(): string{
        console.log('window.location.origin : ', window.location.origin);
        // window.location.origin;
        return window.location.origin;
    }
}