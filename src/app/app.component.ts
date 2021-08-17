import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import {take} from 'rxjs/operators'

import { ApparielService } from './services/appariel.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit , OnDestroy{
  secondes : number = 0 
  CounterSub  = new Subscription
  
  constructor(){

  }
  ngOnInit(){
     this.CounterSub = interval(1000).pipe(take(1000)).subscribe(x=>this.secondes=x )

    
    
  }
  ngOnDestroy(){
  this.CounterSub.unsubscribe()
  
  }
  
}
