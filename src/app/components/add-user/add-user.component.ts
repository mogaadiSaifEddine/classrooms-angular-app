import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  userForm =new FormGroup({})
  defaultdrink = 'pepsi'


  constructor(private formBuilder : FormBuilder ,
     private userService : UserService,
     private route : Router
     ) {

      }

  ngOnInit(): void {
    this.initForm()
    
  }
  initForm(){
    this.userForm = this.formBuilder.group({
      firstName : ['',Validators.required] , 
      lastName: ['',Validators.required] , 
      email:['',Validators.required],
      drinkPreference :['',Validators.required],
      hobbies :this.formBuilder.array([]) 
      
    })
  }
  onSubmit(){
    const formValue =this.userForm.value
    const newUser = new User(formValue['firstName'] ,
                            formValue['lastName'] ,
                            formValue['email'] ,
                            formValue['drinkPreference'] ,
                            formValue['hobbies']  , )
    this.userService.addUSer(newUser)
    this.route.navigate(['/user'])

  }
  getHobbies(){
    
    return this.userForm.get('hobbies') as FormArray
  
  }
  onAddhobbie(){
    const newHobbie=this.formBuilder.control(null)
    this.getHobbies().push(newHobbie)
    console.log(newHobbie);
    
  }

}
