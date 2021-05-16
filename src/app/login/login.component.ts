import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Routes, RouterModule, Router } from '@angular/router';
import { StudentComponent } from '../student/student.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email : string;
  hide: boolean = false;
  password : string;
  constructor(private fb: FormBuilder , private router : Router) {
  }

  ngOnInit() {
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  onLogi() {
    if ( this.email == "kiran9561pawar@gmail.com" && this.password == "kiran123")
    
    {
      
      this.router.navigate(['/Student']);  

    }
    else{
      alert("Please enter valid details")
    }
    console.log(this.loginForm.value);
  }


}
