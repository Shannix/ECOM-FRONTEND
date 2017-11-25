import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import {UserService} from './user.service';

import {LocalStorageService, SessionStorageService,LocalStorage, SessionStorage} from 'ngx-webstorage';


@Injectable()
export class AuthguardGuard implements CanActivate {


constructor (   private router:Router ,private localSt:LocalStorageService ){}

public LoggedIn = this.localSt.retrieve('StateLoggedIn');

 canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {


if ( this.LoggedIn == 'true' ) { return true; }
      else{
      this.router.navigate(['']);
      return false;
      }



  }




}
