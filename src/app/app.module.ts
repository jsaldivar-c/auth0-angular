import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { PreciosComponent } from './components/precios/precios.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        ProtegidaComponent,
        PreciosComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AuthModule.forRoot({
            domain: 'ddgfddywyyww',
            clientId: 'i7O664gdgdfhshsaha',
        }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
