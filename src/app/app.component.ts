import { Component, OnInit } from '@angular/core';
import { ApparielService } from './services/appariel.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  appariels:any[] =[]
   
  isAuth = false
  lastUpdate = new Promise<Date>((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });
  constructor(private apparielService: ApparielService){
      setTimeout(()=>{this.isAuth=true} , 4000)
        
      
  }
  ngOnInit(){
    this.appariels=this.apparielService.appariels
  }
  onAllume(){
    console.log('object');
    this.apparielService.switchOnAll()
  }
  onetient(){
    this.apparielService.switchOffAll()
    console.log('object');
  }

}
