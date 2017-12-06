import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {LocalStorageService, SessionStorageService,LocalStorage, SessionStorage} from 'ngx-webstorage';
import { UserService} from '../user.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpParams , HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {


 public selectedId;
 getproduit: produit ;
 getoffers: offer[] ;


//GET INFOS ----

public PrName : string = "..." ;
public Prdescription : string = "...";
public PrPicture : string = "error.jpg";
public PrPrixmin : number = 0;
public PrPrixmax : number = 0;

constructor(private router:Router , private route: ActivatedRoute,   private localSt:LocalStorageService , private http: HttpClient ) { }

getProductInfoCall(id){
  let header = new HttpHeaders();
  header.append('x-api-key','L1jyBhWpjl114hlrBTvFV8EAoy4zSnWZ8X8BZpYB');
    return this.http.get<produit>('http://localhost:8080/JPAEJB/product?choice=4&ID='+id, { headers:header, responseType:'json' } ) ;
}

  getOffersCall(idpr){
  let header = new HttpHeaders();
  header.append('x-api-key','L1jyBhWpjl114hlrBTvFV8EAoy4zSnWZ8X8BZpYB');
    return this.http.get<offer[]>('http://localhost:8080/JPAEJB/myoffers?choice=4&ID='+idpr, { headers:header, responseType:'json' } ) ;
  }




postRefuseOfferCall(id,st){
  let header = new HttpHeaders();
  header.append('x-api-key','L1jyBhWpjl114hlrBTvFV8EAoy4zSnWZ8X8BZpYB');
    return this.http.get('http://localhost:8080/JPAEJB/myoffers?choice=2&ID='+id+'&ST='+st, { headers:header, responseType:'json' } ) ;
  }

checkoffer = function(id){ this.postRefuseOfferCall(id,1).subscribe(data => { }); }

refuseoffer = function(id){ this.postRefuseOfferCall(id,2).subscribe(data => { }); }




  ngOnInit() {

this.route.params.subscribe(params => {
      this.selectedId = params['id']; //the value of id
    });


this.getProductInfoCall(this.selectedId).subscribe(data => { this.getproduit = data;

  this.PrName   = this.getproduit['title'] ;
  this.Prdescription  = this.getproduit['description'] ;
  this.PrPicture = this.getproduit['linkpicture'];
  this.PrPrixmin  = this.getproduit['pricemin'];
  this.PrPrixmax  = this.getproduit['pricemax'];

   });

this.getOffersCall(this.selectedId).subscribe(data => { this.getoffers = data; });

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

export interface offer {

    idsc : number;
    idcm : number;
    data : string;
    price : number;
    idus : number;
    state : number;
    idpr : number;

}
