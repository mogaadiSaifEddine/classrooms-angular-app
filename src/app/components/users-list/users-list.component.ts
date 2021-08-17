import { Component, OnInit , OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, OnDestroy {


  users : User  []=[]
  userSubscribtion = new Subscription
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.userSubscribtion= this.userService.userSubject.subscribe(
      users => this.users=users
    )
    this.userService.emitUsers()
  }
  ngOnDestroy(){
    this.userSubscribtion.unsubscribe()
  }

}
