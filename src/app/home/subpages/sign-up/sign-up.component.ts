import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegisterServiceService } from 'src/app/services/register-service.service';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private _service:RegisterServiceService, private _router:Router) { }
  register!:FormGroup
  ngOnInit(): void {
     this.register=new FormGroup({
     name : new FormControl('', Validators.required),
     email : new FormControl('', [Validators.required,Validators.email]),
     username : new FormControl('', Validators.required),
     password : new FormControl('', Validators.required),
    cpassword : new FormControl('', Validators.required),
    mobile : new FormControl('', [Validators.required, Validators.minLength(10)])
     })
    }
     updateUserdata(){
   
     this._service.create(this.register.value).subscribe((res:any)=>{
    window.alert('register successfully');
     this.register.reset();
    this._router.navigate(['login'])
  
  },
//   (err)=>{  
// alert ("something went wrong")
//   }
  )
  }
  }
    