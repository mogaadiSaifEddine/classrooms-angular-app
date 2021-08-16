import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './components/appareil/appareil.component';
import { ApparielService } from './services/appariel.service';
import { AuthComponent } from './components/auth/auth.component';
import { ApparielViewComponent } from './components/appariel-view/appariel-view.component';

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthComponent,
    ApparielViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule  , FormsModule
  ],
  providers: [ApparielService],
  bootstrap: [AppComponent]
})
export class AppModule { }
