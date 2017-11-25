
import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import { UserService} from '../user.service';
import {LocalStorageService, SessionStorageService,LocalStorage, SessionStorage} from 'ngx-webstorage';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']

})



export class LoginFormComponent implements OnInit {



  constructor( private localSt:LocalStorageService , private router:Router ) { }






  ngOnInit() {


   }



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

    if( password == 'admin') {



      this.localSt.store('StateLoggedIn', 'true' );
      this.localSt.store('Username', username );
      this.localSt.store('IdUser', 1993 );
      this.router.navigate(['dashboard']);


      	}


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
