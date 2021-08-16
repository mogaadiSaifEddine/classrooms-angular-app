import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApparielService {
  appariels=[
    { 
     id:1 ,  name : 'tv', status :'eteint'
    },
    {
      id:2,  name : 'ordinateur', status :'eteint'
    },
    {
      id:3,  name : 'machine a laver', status :'allumé'
    }
  ]

  constructor() { }

  getAppareilbyId(id:number) {
   const appriel = this.appariels.find(app=> app.id===id)
   return appriel

  }
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
