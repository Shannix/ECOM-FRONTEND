import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {LocalStorageService, SessionStorageService,LocalStorage, SessionStorage} from 'ngx-webstorage';
import { UserService} from '../user.service';

import { HttpClient } from '@angular/common/http';
import { HttpParams , HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {

//public PanierV2 : produit[] = [ {"pricemin":0,"zipcode":38000,"pricemax":0,"linkpicture":"macbook.jpeg","idus":1993,"categ":"Informatique","description":"aa","diff":-488,"idpr":1,"title":"aa","expiration_date":"2016-08-16"} ] ;
public PanierV2 : produit[] = [ ] ;
public PanierV3;
  constructor(private router:Router ,  private localSt:LocalStorageService , private http: HttpClient  ) {
  this.PanierV3 =  localSt.retrieve('Eshopping2');
       // alert(this.PanierV3);
        if( this.PanierV3 != null ) { this.PanierV2 = this.PanierV3;   }else{  localSt.store('Eshopping2', this.PanierV2 ); }

   }




public ProductCheck : produit;
Products :produit[];
public idus : number = this.localSt.retrieve('idus');

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

this.getProductsCall().subscribe(data => { this.Products = data;   });

 console.log(this.localSt);


   }


//this.PanierV2 =  this.localSt.retrieve('Eshopping2');





//public Panier  ;
//this.localSt.store('Eshopping2', this.Panier );


// DEFAULT FILTRE
CPAMMIN=0;
CPAMMAX=1000;
CPAMCP=38000;
CPAMSEARCH = "";
CPAMCATEG = "" ;











    addShop = function(id){

 //this.getProductInfoCall(1).subscribe(data => { this.Panier.push(data);   });



 this.getProductInfoCall(id).subscribe(data => {


var ETT ;
 if( this.PanierV2 != null ) {
var pas;
for (pas = 0; pas < this.PanierV2.length; pas++) {
if( this.PanierV2[pas].idpr == data.idpr ) { console.log(this.PanierV2[pas]); this.ETT='true';   }
}
   }
  if( this.ETT != 'true' ) {
   this.PanierV2.push(data);
   this.localSt.store('Eshopping2', this.PanierV2 );
   }

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
    diff: number;
    categ: string;

}
