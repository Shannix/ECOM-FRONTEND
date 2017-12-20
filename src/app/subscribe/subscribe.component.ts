
import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import { UserService} from '../user.service';
import {LocalStorageService, SessionStorageService,LocalStorage, SessionStorage} from 'ngx-webstorage';
import { HttpClient } from '@angular/common/http';
import { HttpParams , HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {


  constructor( private localSt:LocalStorageService , private router:Router, private http: HttpClient ) { }

  ngOnInit() {  }



postSuscribeUserCall(nom,prenom,email,password,phone){

let header = new HttpHeaders();
header.append('x-api-key','L1jyBhWpjl114hlrBTvFV8EAoy4zSnWZ8X8BZpYB');
    return this.http.get<state>('http://localhost:8080/JPAEJB/users?choice=1&nom='+nom+'&prenom='+prenom+'&email='+email+'&phone='+phone+'&mdp='+password, { headers:header, responseType:'json' } ) ;

}




 RegisterUser(e){

        e.preventDefault();

  	let nom = e.target.elements[0].value;
  	let prenom = e.target.elements[1].value;
    let email = e.target.elements[2].value;
  	let phone = e.target.elements[3].value;
  	let password = e.target.elements[4].value;

if( nom=="" || prenom==""  || email=="" || phone=="" || password=="" ){
alert ("Tous les champs sont obligatoires");
}else{
this.postSuscribeUserCall(nom,prenom,email,password,phone).subscribe(data => {

    if( data['error'] == "false" ){
     this.router.navigate(['login']);
    }else{  alert( " L'utilisateur existe déja. " ) ; }


   });


}





}





}


export interface state {
    error: string;
}
