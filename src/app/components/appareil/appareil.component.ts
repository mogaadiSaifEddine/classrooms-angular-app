import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  @Input() apparielName : string =''
  @Input() appareilStatus : string=''
  
  
  constructor() { } 

  ngOnInit(): void {
  }
  getStatus():string {
    return this.appareilStatus
  }
  getColor () : string {
    let color :string=''
   color =  this.appareilStatus==='eteint' ?   'red' :'green'
    return   color


    }

  }


