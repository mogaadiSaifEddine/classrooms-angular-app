import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApparielService } from '../../services/appariel.service';

@Component({
  selector: 'app-one-appareil',
  templateUrl: './one-appareil.component.html',
  styleUrls: ['./one-appareil.component.scss']
})
export class OneAppareilComponent implements OnInit {
  name:string='cc'
  status: string='s:dkhkdsjbc'
  appareil :any

  constructor(private appareilService : ApparielService ,private route : ActivatedRoute) { }

  ngOnInit(): void {
    const id =this.route.snapshot.params['id']
    this.appareil= this.appareilService.getAppareilbyId((+id));
    this.name=this.appareil.name
    this.status=this.appareil.status
    console.log(this.name , this.status);
    console.log(this.name);
  }

}
