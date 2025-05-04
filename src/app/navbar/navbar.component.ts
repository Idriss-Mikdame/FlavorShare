import {Component, OnInit} from '@angular/core';
import {AuthenticationServicesService} from '../services/authentication-services.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  constructor(public authServices:AuthenticationServicesService,private router:Router) {
  }

  ngOnInit(): void {
  }
  logout() {
    this.authServices.logout().subscribe({
      next:(data)=>{
        this.router.navigateByUrl("/login")
      }
    })
  }
}
