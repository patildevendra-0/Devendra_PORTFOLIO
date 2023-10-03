import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { WelcomePageComponent } from './Components/welcome-page/welcome-page.component';
import { RouterComponent } from './Components/router/router.component';
import { NavbarComponent } from './Components/navbar/navbar.component';

const routes: Routes = [
  { path: '', component:RouterComponent  }, // Landing page route
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    WelcomePageComponent,
    RouterComponent,
    NavbarComponent
  ],
  imports: [
    RouterModule.forRoot(routes),

    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
