
import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import { UserService} from '../user.service';
import {LocalStorageService, SessionStorageService,LocalStorage, SessionStorage} from 'ngx-webstorage';
import { HttpClient } from '@angular/common/http';
import { HttpParams , HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']

})



export class LoginFormComponent implements OnInit {



  constructor( private localSt:LocalStorageService , private router:Router, private http: HttpClient ) { }




results: string[];

ngOnInit(){ }




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

    let header = new HttpHeaders();
    header.append('x-api-key','L1jyBhWpjl114hlrBTvFV8EAoy4zSnWZ8X8BZpYB');


    this.http.get('http://localhost:8080/JPAEJB/connect?username='+username+'&password='+password, { headers:header, responseType:'json' } ).subscribe(data => {

      this.localSt.store('StateLoggedIn', data.Auth );
      this.localSt.store('Username', data.name+'.'+data.fname );
      this.localSt.store('IdUser', data.idus );
      let etat = 'true';

        if( true ) {
        this.router.navigate(['dashboard']);
         }else{
         alert('error');
         }


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
