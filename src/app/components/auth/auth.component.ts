import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authStatus=false

  constructor(private authService :  AuthService) { }

  ngOnInit(): void {
    this.authStatus=this.authService.isAuth
  }
logIn(){
  this.authService.signIn().then(()=>{
   this.authStatus=this.authService.isAuth
  })
  
}
getMsg(){
  let msg=''
  msg=this.authStatus ? 'log Out': 'Log In'
  return msg
}
logOut(){
this.authService.signOut()
this.authStatus=this.authService.isAuth
console.log(this.authStatus);
}
}
