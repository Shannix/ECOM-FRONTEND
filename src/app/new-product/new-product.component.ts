import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {LocalStorageService, SessionStorageService,LocalStorage, SessionStorage} from 'ngx-webstorage';
import { UserService} from '../user.service';


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

   constructor(private router:Router ,  private localSt:LocalStorageService  ) { }

  ngOnInit() {
  }



ViewProductDetail = function(index : any ) {

 this.router.navigate(['offers' , index ]);


}


}
