import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService} from '../user.service';
import {LocalStorageService, SessionStorageService,LocalStorage, SessionStorage} from 'ngx-webstorage';



@Component({
  selector: 'app-new-ad',
  templateUrl: './new-ad.component.html',
  styleUrls: ['./new-ad.component.css']
})
export class NewAdComponent implements OnInit {

  constructor( private localSt:LocalStorageService, private router:Router   ) {   }

  ngOnInit() {
  }

public UserName : string = this.localSt.retrieve('Username');
public LoggedIn = this.localSt.retrieve('StateLoggedIn');



}
