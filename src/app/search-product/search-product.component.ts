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
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {


  constructor(private router:Router ,  private localSt:LocalStorageService , private http: HttpClient  ) { }


Products :produit[];


  getProductInfoCall(id){

let header = new HttpHeaders();
header.append('x-api-key','L1jyBhWpjl114hlrBTvFV8EAoy4zSnWZ8X8BZpYB');
    return this.http.get<produit>('http://localhost:8080/JPAEJB/product?choice=4&ID='+id, { headers:header, responseType:'json' } ) ;

  }

  getProductsCall(){
  let header = new HttpHeaders();
  header.append('x-api-key','L1jyBhWpjl114hlrBTvFV8EAoy4zSnWZ8X8BZpYB');
    return this.http.get<produit[]>('http://localhost:8080/JPAEJB/product?choice=5', { headers:header, responseType:'json' } ) ;
  }


  ngOnInit():void {
   this.getProductsCall().subscribe(data => { this.Products = data;  });
   }


// DEFAULT FILTRE
CPAMMIN=0;
CPAMMAX=10000;
CPAMCP=38000;
CPAMSEARCH = "";



public Panier =  this.localSt.retrieve('Eshopping');

    addShop = function(id){

  this.getProductInfoCall(id).subscribe(data => {
    this.Panier.push(data);
    this.localSt.store('Eshopping', this.Panier );
  });

     }

}





export interface produit {

    pricemin: number;
    zipcode : number;
    pricemax: number;
    linkpicture : string;
    idus: number;
    description: string;
    idpr : number;
    title :string;
    expiration_date: string;

}
