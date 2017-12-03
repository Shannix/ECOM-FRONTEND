
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
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']

})






export class LoginFormComponent implements OnInit {



  constructor( private localSt:LocalStorageService , private router:Router, private http: HttpClient ) { }




results: connect ;



getUserLoginCall(username,password){

let header = new HttpHeaders();
header.append('x-api-key','L1jyBhWpjl114hlrBTvFV8EAoy4zSnWZ8X8BZpYB');
    return this.http.get<connect>('http://localhost:8080/JPAEJB/connect?username='+username+'&password='+password, { headers:header, responseType:'json' } ) ;

}




ngOnInit(): void  { }




@LocalStorage()
public StateLoggedIn ;

@LocalStorage()
public Username ;

@LocalStorage()
public IdUser ;


@LocalStorage()
public Eshopping ;

 public LoggedIn = this.localSt.retrieve('StateLoggedIn');


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
     this.router.navigate(['dashboard']);
    }else{  alert( ' Email ou Mot de passe érroné ' ) ; }

    });



    }




 }



export class commande {

 constructor(
	public idpr: number,
  public idus : number,
	public name : string,
  public prixmin: number,
  public prixmax: number,
  public price : number

  ) { }

}



export interface connect {


    subscribdate: string;
   fname : string;
	 phone : string;
    Auth: string;
  idus: string;
    name : string;


}


export interface ItemsResponse {

  res: string[];
}
