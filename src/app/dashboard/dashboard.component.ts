import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service';

import {LocalStorageService, SessionStorageService,LocalStorage, SessionStorage} from 'ng2-webstorage';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor( private localSt:LocalStorageService ) { }


  ngOnInit() {
  }

}
