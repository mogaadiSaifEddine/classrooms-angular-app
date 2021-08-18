import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient} from'@angular/common/http';

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
  

  constructor(private httpClient : HttpClient) { }
  emitAppSubject(){
    this.httpClient.get<any[]>(
      'https://classrooms-project-default-rtdb.europe-west1.firebasedatabase.app/appareils.json' ).subscribe((res)=>{
      this.apparielSubject.next( Object.values(res));console.log(Object.values(res))  ;}, (err)=>{console.log('erreur ya broo ')+err;}
      )
    
    
  //  this.apparielSubject.next(this.appariels.slice())
  //   console.log(this.appariels);
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
    this.httpClient.post('https://classrooms-project-default-rtdb.europe-west1.firebasedatabase.app/appareils.json' ,appObject ).subscribe(()=>{console.log("termine");}, (err)=>{console.log('erreur ya broo ')+err;})
  
    this.emitAppSubject()
  

  }
  fetching(){
    this.httpClient.get<any[]>(
      'https://classrooms-project-default-rtdb.europe-west1.firebasedatabase.app/appareils.json' ).subscribe((res)=>{
      this.appariels=Object.values(res);console.log(Object.values(res)); this.emitAppSubject()  ;}, (err)=>{console.log('erreur ya broo ')+err;}
      )
     
  }
  // changinStatus(id:number){
  //   this.httpClient.put(
  //     'https://classrooms-project-default-rtdb.europe-west1.firebasedatabase.app/appareils.json' , '')
  // }
  

}
