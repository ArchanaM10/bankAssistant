import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './login.interface';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() { }

    login: Login = {
        username: '',
        password: ''
    };

    doLogin(loginForm: any): void {
        console.log('loginForm : ', loginForm);
        this.router.navigate(['/chatboard']);
    }
}