import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {LocalStorageService, SessionStorageService,LocalStorage, SessionStorage} from 'ngx-webstorage';
import { UserService} from '../user.service';
import { HttpClient } from '@angular/common/http';
import { HttpParams , HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

    constructor(private router:Router ,  private localSt:LocalStorageService , private http: HttpClient  ) { }


getproduit: produit ;
Products: produit[] ;

getProductInfoCall(id){

let header = new HttpHeaders();
header.append('x-api-key','L1jyBhWpjl114hlrBTvFV8EAoy4zSnWZ8X8BZpYB');
    return this.http.get<produit>('http://localhost:8080/JPAEJB/product?choice=4&ID='+id, { headers:header, responseType:'json' } ) ;
}


getProductsCall(id){

let header = new HttpHeaders();
header.append('x-api-key','L1jyBhWpjl114hlrBTvFV8EAoy4zSnWZ8X8BZpYB');
    return this.http.get<produit[]>('http://localhost:8080/JPAEJB/product?choice=6&ID='+id, { headers:header, responseType:'json' } ) ;

}


  ngOnInit():void {
   this.getProductsCall(this.localSt.retrieve('idus')).subscribe(data => { this.Products = data;  });
   }



ViewProductDetail = function(index : any ) { this.router.navigate(['offers' , index ]); }


//GET INFOS ----
public PrName : string = "..." ;
public Prdescription : string = "...";
public PrPicture : string = "error.jpg";
public PrPrixmin : number = 0;
public PrPrixmax : number = 0;




PickInfo = function(idpr){

this.getProductInfoCall(idpr).subscribe(data => { this.getproduit = data;

  this.PrName   = this.getproduit['title'] ;
  this.Prdescription  = this.getproduit['description'] ;
  this.PrPicture = this.getproduit['linkpicture'];
  this.PrPrixmin  = this.getproduit['pricemin'];
  this.PrPrixmax  = this.getproduit['pricemax'];

   });

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
