
import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {LocalStorageService, SessionStorageService,LocalStorage, SessionStorage} from 'ngx-webstorage';
import { UserService} from '../user.service';
import { HttpClient } from '@angular/common/http';
import { HttpParams , HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})


export class ShoppingComponent implements OnInit {


   constructor(private router:Router ,  private localSt:LocalStorageService , private http: HttpClient  ) { }



  ngOnInit() { }


public UserName : string = this.localSt.retrieve('Username');
public LoggedIn = this.localSt.retrieve('StateLoggedIn');


public nombreShop=1;

Increment = function(){
this.nombreShop=this.nombreShop+1;
}

//GET INFOS ----
getproduit: produit ;

public PrName : string = "..." ;
public Prdescription : string = "...";
public PrPicture : string = "macbook.jpeg";
public PrPrixmin : number = 0;
public PrPrixmax : number = 0;


getProductInfoCall(id){

let header = new HttpHeaders();
header.append('x-api-key','L1jyBhWpjl114hlrBTvFV8EAoy4zSnWZ8X8BZpYB');
    return this.http.get<produit>('http://localhost:8080/JPAEJB/product?choice=4&ID='+id, { headers:header, responseType:'json' } ) ;

}




PickInfo = function(idpr){

this.getProductInfoCall(idpr).subscribe(data => { this.getproduit = data;

  this.PrName   = this.getproduit['title'] ;
  this.Prdescription  = this.getproduit['description'] ;
  this.PrPicture = this.getproduit['linkpicture'];
  this.PrPrixmin  = this.getproduit['pricemin'];
  this.PrPrixmax  = this.getproduit['pricemax'];

   });

}

public Panier =  this.localSt.retrieve('Eshopping');





DeleteShop = function(id){

 this.localSt.store('Eshopping', this.Panier.splice(id,1) );
}



}






export interface produit {


    pricemin: number;
    pricemax: number;
    zipcode : number;
	  linkpicture : string;
    idus: number;
    description: string;
    idpr : number;
    title : string;
    expiration_date: string;

}
