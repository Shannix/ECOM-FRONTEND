import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService} from '../user.service';
import {LocalStorageService, SessionStorageService,LocalStorage, SessionStorage} from 'ngx-webstorage';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ UserService ]
})



export class HeaderComponent implements OnInit {

  constructor( private localSt:LocalStorageService, private router:Router   ) {   }

  ngOnInit() {

  }

 public UserName : string = this.localSt.retrieve('Username');
 public LoggedIn = this.localSt.retrieve('StateLoggedIn');

//à revoir
NumberShop = this.localSt.retrieve('Eshopping2').length ;
//NumberShop = 0;

SearchUser(e){
         e.preventDefault();
  	let search = e.target.elements[0].value;
    this.router.navigate(['search']);
}


Logout = function(){
 this.localSt.store('StateLoggedIn', 'false' );
}

GoPanier = function(){
this.router.navigate(['shop']);
}


}
