import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {LocalStorageService, SessionStorageService,LocalStorage, SessionStorage} from 'ngx-webstorage';
import { UserService} from '../user.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {


 public selectedId;

  constructor(private router:Router , private route: ActivatedRoute,   private localSt:LocalStorageService  ) { }

  ngOnInit() {

this.route.params.subscribe(params => {
      this.selectedId = params['id']; //the value of id
    });
            }











}
