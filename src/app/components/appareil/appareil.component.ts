
import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';
import { ApparielService } from 'src/app/services/appariel.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  @Input() apparielName : string =''
  @Input() appareilStatus : string=''
  @Input() apparielIndex : number=0
  @Output() appareilEvent = new EventEmitter()
  
  
  constructor(private appareilService : ApparielService) { } 

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
    switchOnOne(){
      this.appareilService.switchOnOne(this.apparielIndex)
    }
    switchOffOne(){
      this.appareilService.switchOffOne(this.apparielIndex)
    }
    

  }


