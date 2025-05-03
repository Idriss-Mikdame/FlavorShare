import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthenticationServicesService} from '../services/authentication-services.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  userFormGroup! : FormGroup;
  errorMessage : any
  constructor(private fb:FormBuilder,private AthenthServices:AuthenticationServicesService
    ,private router:Router
  ) {
  }
  ngOnInit(): void {
    this.userFormGroup = this.fb.group({
        username : this.fb.control(''),
        password : this.fb.control(''),
      }
    )

  }

  handelLogin() {
  let username = this.userFormGroup.value.username;
  let password = this.userFormGroup.value.password
  this.AthenthServices.login(username,password).subscribe({
    next:(Appuser)=>{
      this.AthenthServices.AuuthenticatedUsers(Appuser).subscribe({
        next:(data)=>{
          this.router.navigateByUrl('/admin/home')
        }
      })
    },
    error:(err)=>{
      this.errorMessage = err
    }
  })
  }


}
