import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService} from '../user.service';
import {LocalStorageService, SessionStorageService,LocalStorage, SessionStorage} from 'ngx-webstorage';
import { HttpClient } from '@angular/common/http';
import { HttpParams , HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Component({
  selector: 'app-new-ad',
  templateUrl: './new-ad.component.html',
  styleUrls: ['./new-ad.component.css']
})
export class NewAdComponent implements OnInit {

  constructor( private localSt:LocalStorageService, private router:Router  , private http: HttpClient  ) {   }

  ngOnInit() {  }

@LocalStorage()
public StateLoggedIn ;

@LocalStorage()
public Username ;

@LocalStorage()
public IdUser ;


@LocalStorage()
public Eshopping ;


results: connect ;

public UserName : string = this.localSt.retrieve('Username');
public LoggedIn = this.localSt.retrieve('StateLoggedIn');


getUserLoginCall(username,password){

let header = new HttpHeaders();
header.append('x-api-key','L1jyBhWpjl114hlrBTvFV8EAoy4zSnWZ8X8BZpYB');
    return this.http.get<connect>('http://localhost:8080/JPAEJB/connect?username='+username+'&password='+password, { headers:header, responseType:'json' } ) ;

}


getProductInsertCall(idus,inti,desc,categ,pricemin,pricemax,postale,date,link){

let header = new HttpHeaders();
header.append('x-api-key','L1jyBhWpjl114hlrBTvFV8EAoy4zSnWZ8X8BZpYB');
    return this.http.get<error>('http://localhost:8080/JPAEJB/product?choice=0&idus='+idus+'&title='+inti+'&desc='+desc+'&categ='+categ+'&pricemin='+pricemin+'&pricemax='+pricemax+'&postale='+postale+'&date='+date+'&link='+link, { headers:header, responseType:'json' } ) ;
}




RegisterProduct(e){
    e.preventDefault();

  	let inti = e.target.elements[0].value;
  	let desc = e.target.elements[1].value;
    let categ = e.target.elements[2].value;
    let pricemin = e.target.elements[3].value;
    let pricemax = e.target.elements[4].value;
    let postale = e.target.elements[5].value;
    let date = e.target.elements[6].value;
    let link = 'error.jpg'

  this.getProductInsertCall(this.localSt.retrieve('idus'),inti,desc,categ,pricemin,pricemax,postale,date,link).subscribe(data => {

    if( data['error'] == "false" ){
     this.router.navigate(['newad']);
    }else{  alert( "Ajout impossible du produit." ) ; }

       });

  }





     loginUser(e){

     e.preventDefault();

  	let username = e.target.elements[0].value;
  	let password = e.target.elements[1].value;


this.getUserLoginCall(username,password).subscribe(data => {

   this.results = data;
   this.localSt.store('StateLoggedIn', this.results['Auth'] );
   this.localSt.store('Username', this.results['fname'] );
   this.localSt.store('idus', this.results['idus'] );


    if( this.results['Auth'] == "true" ){
     this.router.navigate(['newad']);
    }else{  alert( ' Email ou Mot de passe érroné ' ) ; }

    });

         }






}





export interface connect {


    subscribdate: string;
   fname : string;
	 phone : string;
    Auth: string;
  idus: string;
    name : string;


}
