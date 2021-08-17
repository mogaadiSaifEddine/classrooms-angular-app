import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './components/appareil/appareil.component';
import { ApparielService } from './services/appariel.service';
import { AuthComponent } from './components/auth/auth.component';
import { ApparielViewComponent } from './components/appariel-view/appariel-view.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { OneAppareilComponent } from './components/one-appareil/one-appareil.component';
import { QtzeroqtComponent } from './qtzeroqt/qtzeroqt.component';
import { AuthGuardService } from './services/auth-guard.service';
import { EditAppareilComponent } from './components/edit-appareil/edit-appareil.component';

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthComponent,
    ApparielViewComponent ,
    OneAppareilComponent,
    QtzeroqtComponent,
    EditAppareilComponent ,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule  , FormsModule 
  
  ],
  providers: [ApparielService , AuthService ,  AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
