import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApparielService } from 'src/app/services/appariel.service';

@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.scss']
})
export class EditAppareilComponent implements OnInit {

  constructor(private appareilService : ApparielService , private route : Router) { }
  defaultOnOff = 'eteint'

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){ 
   const name= form.value['name']
   const status = form.value['status']
   this.appareilService.addAppareil(name, status)
   this.route.navigate(['/app'])


  }
  

}
