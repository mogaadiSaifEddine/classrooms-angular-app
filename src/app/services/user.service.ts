import { User } from "../user.model";
import {Subject} from 'rxjs' 

export  class UserService {
    private  users : User[] =[
        {firstName: 'saif' , 
        lastName: 'mogaadi', 
        email : 'mks,qc;sdv', 
        drinkPreference:'dsmlfd'

        }, 
      
    ]
    userSubject =new Subject <User[]>()
    emitUsers(){
        this.userSubject.next(this.users.slice())
    }
    addUSer(user:User){
        this.users.push(user)
        this.emitUsers()
    }
}