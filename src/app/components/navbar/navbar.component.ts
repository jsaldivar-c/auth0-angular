import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styles: [],
})
export class NavbarComponent implements OnInit {
    constructor(
        public auth: AuthService,
        @Inject(DOCUMENT) public document: Document
    ) {}

    ngOnInit(): void {}

    // loginWithRedirect() {
    //     this.auth.loginWithRedirect();
    // }

    // logout() {
    //     this.auth.logout({ returnTo: this.doc.location.origin });
    // }
}
