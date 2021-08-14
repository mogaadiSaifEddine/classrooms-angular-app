import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false
  lastUpdate = new Promise<Date>((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });
  constructor(){
      setTimeout(()=>{this.isAuth=true} , 4000)
        
      
  }
  onAllume(){
    console.log('object');
  }
  appariels=[
    { 
      name : 'tv', status :'eteint'
    },
    {
      name : 'ordinateur', status :'eteint'
    },
    {
      name : 'machine a laver', status :'allumé'
    }
  ]}
