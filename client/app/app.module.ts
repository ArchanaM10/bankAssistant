import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { ChatboardComponent } from './components/chatboard/chatboard.component';
import { ClientChatComponent } from './components/chatboard/partials/client/clientChat.component';
import { ServerChatComponent } from './components/chatboard/partials/server/serverChat.component';

import { GETHTTPService } from './services/http/get.httpService';

@NgModule({
    imports: [BrowserModule, AppRoutingModule, FormsModule, HttpModule],
    exports: [],
    declarations: [AppComponent, LoginComponent, HeaderComponent, ChatboardComponent,
        ClientChatComponent, ServerChatComponent],
    providers: [GETHTTPService],
    bootstrap: [AppComponent]
})
export class AppModule { }