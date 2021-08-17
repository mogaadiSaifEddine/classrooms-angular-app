import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApparielService {
  apparielSubject = new Subject<any[]>()
 private appariels=[
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
  emitAppSubject(){
    this.apparielSubject.next(this.appariels.slice())
  }

  getAppareilbyId(id:number) {
   const appriel = this.appariels.find(app=> app.id===id)
   this.emitAppSubject()

   return appriel

  }
  switchOnAll(){
    this.appariels.map(app=>app.status='allumé')
    this.emitAppSubject()
  }
  switchOffAll(){
    this.appariels.map(app=>app.status='eteint')
    this.emitAppSubject()
  }
  switchOnOne(index:number) {
    this.appariels[index].status='allumé'
    this.emitAppSubject()
  }
  switchOffOne (index:number) {
    this.appariels[index].status='eteint'
    this.emitAppSubject()
  }
  addAppareil (name: string , status : string){
    const appObject ={
         id: this.appariels.length+1 ,
         name , 
         status 

    }
    this.appariels.push(appObject)
    this.emitAppSubject()
  

  }

}
