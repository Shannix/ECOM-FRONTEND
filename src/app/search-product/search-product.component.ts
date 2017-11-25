import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';

import {LocalStorageService, SessionStorageService,LocalStorage, SessionStorage} from 'ngx-webstorage';
import { UserService} from '../user.service';



@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {

  constructor(private router:Router ,  private localSt:LocalStorageService  ) { }

  ngOnInit() {  }

CPAMMIN=0;
CPAMMAX=10000;
CPAMCP=38000;
CPAMSEARCH = "";




  Products = [
    new Product(1, 99, 'MacBook pro', 'petite description', 'macbook.jpeg', 450 , 850,38000 , 2 ),
    new Product(2, 99, 'Ecrans 19 pouces ', 'petite description', 'macbook.jpeg', 50 , 80 ,38000 ,3),
    new Product(3, 99, 'Sweet M ', 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', 'macbook.jpeg', 15 , 25,38000 , 4 ),
    new Product(3, 99, 'Sweet M ', 'petite description', 'macbook.jpeg', 29 , 33 ,38000 ,10 )
  ];



public Panier =  this.localSt.retrieve('Eshopping');




addShop = function(id){

this.Panier.push(new commande( 44, 99, 'commande test', 50, 3200,  8500 ) );
this.localSt.store('Eshopping', this.Panier );

}




}




export class Product {

 constructor(
	public idpr: number,
  public idus : number,
	public name : string,
  public description : string,
  public picture : string ,
  public prixmin : number ,
  public prixmax : number,
  public codepostale : number,
  public days : number

  ) { }

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
