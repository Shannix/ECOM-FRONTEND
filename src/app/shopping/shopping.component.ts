import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';


import {LocalStorageService, SessionStorageService,LocalStorage, SessionStorage} from 'ngx-webstorage';
import { UserService} from '../user.service';


@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})


export class ShoppingComponent implements OnInit {


   constructor(private router:Router ,  private localSt:LocalStorageService  ) { }

  ngOnInit() {
  }


public UserName : string = this.localSt.retrieve('Username');
public LoggedIn = this.localSt.retrieve('StateLoggedIn');



public nombreShop=1;

Increment = function(){
this.nombreShop=this.nombreShop+1;
}

//GET INFOS ----
public PrName : string = "..." ;
public Prdescription : string = "...";
public PrPicture : string = "macbook.jpeg";
public PrPrixmin : number = 0;
public PrPrixmax : number = 0;


PickInfo = function(idpr){

this.PrName   = "AAAA." ;
this.Prdescription  = "AAAA.";
this.PrPicture = "macbook.jpeg";
this.PrPrixmin  = 10;
this.PrPrixmax  = 20;

}

public Panier =  this.localSt.retrieve('Eshopping');





DeleteShop = function(id){

 this.localSt.store('Eshopping', this.Panier.splice(id,1) );
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
