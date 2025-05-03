import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  MaybeAsync,
  GuardResult,
  Router
} from '@angular/router';
import {AuthenticationServicesService} from '../services/authentication-services.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private authService : AuthenticationServicesService,private route:Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    let autehticated =   this.authService.isAhthenticated()
    if (autehticated==false){
      this.route.navigateByUrl('/login')
      return false
    }else {
      return true
    }
  }


}




