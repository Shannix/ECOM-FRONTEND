import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {LocalStorageService, SessionStorageService,LocalStorage, SessionStorage} from 'ngx-webstorage';
import { UserService} from '../user.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpParams , HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-simulate',
  templateUrl: './simulate.component.html',
  styleUrls: ['./simulate.component.css']
})
export class SimulateComponent implements OnInit {

  constructor(private router:Router , private route: ActivatedRoute,  private localSt:LocalStorageService , private http: HttpClient ) { }


 public selectedId;
 public price ;

  public nom="";
  public pre = "";
  public email= "" ;
  public telephone = "";




  ngOnInit() {
     this.route.params.subscribe(params => {
      this.selectedId = params['id'] ; //the value of id
    });

  }


affiche = function() {

this.nom = "Charles " ;
this.pre = "Clément " ;
this.telephone=" 0769 17 11 50" ;
this.email = "gabriel2.martin@gmail.com" ;

}



}


