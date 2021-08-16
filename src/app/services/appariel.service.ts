import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApparielService {
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
  ]

  constructor() { }
  switchOnAll(){
    this.appariels.map(app=>app.status='allumé')
  }
  switchOffAll(){
    this.appariels.map(app=>app.status='eteint')
  }
  switchOnOne(index:number) {
    this.appariels[index].status='allumé'
  }
  switchOffOne (index:number) {
    this.appariels[index].status='eteint'
  }

}
