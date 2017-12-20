import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {LocalStorageService, SessionStorageService,LocalStorage, SessionStorage} from 'ngx-webstorage';
import { UserService} from '../user.service';

import { HttpClient } from '@angular/common/http';
import { HttpParams , HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Pipe, PipeTransform } from '@angular/core';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

 constructor(private router:Router ,  private localSt:LocalStorageService , private http: HttpClient   ) { }


public User : user;

  getUserInfoCall(id){

let header = new HttpHeaders();
header.append('x-api-key','L1jyBhWpjl114hlrBTvFV8EAoy4zSnWZ8X8BZpYB');
    return this.http.get<user>('http://localhost:8080/JPAEJB/users?choice=2&idus='+id, { headers:header, responseType:'json' } ) ;

  }


  ngOnInit() {


this.getUserInfoCall(this.localSt.retrieve('idus')).subscribe(data => { this.User = data;   });

  }









}

export interface user {

    idus: number;
    tel : string;
    nom: string;
    prenom : string;
    email : string;

}
