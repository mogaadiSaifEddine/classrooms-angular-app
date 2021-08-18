import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ApparielViewComponent } from './components/appariel-view/appariel-view.component';
import { AuthComponent } from './components/auth/auth.component';
import { EditAppareilComponent } from './components/edit-appareil/edit-appareil.component';
import { OneAppareilComponent } from './components/one-appareil/one-appareil.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { QtzeroqtComponent } from './qtzeroqt/qtzeroqt.component';
import { AuthGuardService } from './services/auth-guard.service';

const appRoutes : Routes=[
  {path : 'auth' ,component : AuthComponent} , 
  {path :'' , canActivate:[AuthGuardService] , component : ApparielViewComponent} , 
  {path :'app' , canActivate:[AuthGuardService] , component : ApparielViewComponent} ,
  {path:'edit',canActivate: [AuthGuardService] ,  component : EditAppareilComponent} ,
  {path:'user' , component : UsersListComponent} , 
  {path:'addUser' , component : AddUserComponent} , 

 {path : 'app/:id' ,component : OneAppareilComponent } , 
 {path : 'aaa' ,component : QtzeroqtComponent } , 
 {path : '**' , redirectTo : 'aaa'}


] ; 

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
