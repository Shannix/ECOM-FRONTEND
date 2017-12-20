
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


   constructor(private router:Router ,  private localSt:LocalStorageService , private http: HttpClient  ) {
    this.Sidus = localSt.retrieve('idus');
   }






@LocalStorage()
public StateLoggedIn ;

@LocalStorage()
public Username ;

@LocalStorage()
public IdUser ;





ngOnInit() { let tt  ;   }

public Sidus : number=0;
results: connect ;
public UserName : string = this.localSt.retrieve('Username');
public LoggedIn = this.localSt.retrieve('StateLoggedIn');





getUserLoginCall(username,password){

let header = new HttpHeaders();
header.append('x-api-key','L1jyBhWpjl114hlrBTvFV8EAoy4zSnWZ8X8BZpYB');
    return this.http.get<connect>('http://localhost:8080/JPAEJB/connect?username='+username+'&password='+password, { headers:header, responseType:'json' } ) ;

}


 loginUser(e){

     e.preventDefault();

  	let username = e.target.elements[0].value;
  	let password = e.target.elements[1].value;


this.getUserLoginCall(username,password).subscribe(data => {

   this.results = data;
   this.localSt.store('StateLoggedIn', this.results['Auth'] );
   this.localSt.store('Username', this.results['fname'] );
   this.localSt.store('idus', this.results['idus'] );
   this.Sidus = this.results['idus'];

    if( this.results['Auth'] == "true" ){
   this.router.navigate(['dashboard']);
    }else{  alert( ' Email ou Mot de passe érroné ' ) ; }

    });



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


public Panier =  this.localSt.retrieve('Eshopping2');




DeleteShop = function(id){

    this.Panier.splice(id,1);


   this.localSt.store('Eshopping2', this.Panier );

}



postProductPurchaseCall(idus,idpr,price){

let header = new HttpHeaders();
header.append('x-api-key','L1jyBhWpjl114hlrBTvFV8EAoy4zSnWZ8X8BZpYB');
    return this.http.get('http://localhost:8080/JPAEJB/myoffers?choice=0&idus='+idus+'&idpr='+idpr+'&price='+price, { headers:header, responseType:'json' } ) ;

}



total: number = 0 ;
totalf: number = 0 ;


AddShop = function(prixmin ,index,id,price){

if(price >= prixmin ){
this.total = this.total+ price;
this.totalf = this.totalf + price*0.03;

this.postProductPurchaseCall(this.localSt.retrieve('idus'),id,price).subscribe(data => {   });

this.Panier.splice(index,1);
this.localSt.store('Eshopping2', this.Panier );
    alert("Nous transmettons votre offre au vendeur.");

}else{
    alert("il faut saisir une proposition entre la fourchette de prix avant de soumettre cette offre. ");
}


// this.router.navigate(['mypurchases']);
}



getTotale = function() {

return 0;
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
    diff: number;
    categ: string;

}

export interface connect {


    subscribdate: string;
   fname : string;
	 phone : string;
    Auth: string;
  idus: number;
    name : string;


}
