import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formGroup: FormGroup;
  isLoding: boolean = false;
  headers:any=  new HttpHeaders({
      'Content-Type': 'application/json',
       'Access-Control-Allow-Origin':'*',
       'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept"
    });

  constructor(private _fb: FormBuilder,
                private router: Router,
              private http: HttpClient) { }

  ngOnInit() {
    this.formGroup = this._fb.group({
      userName: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    });

  }
  login() {
  if(this.formGroup.valid) {
    let url = "http://192.168.43.113:8080/ReceipeBuilder/login";
    let obj = {
      email:this.formGroup.controls['userName'].value,
      password:this.formGroup.controls['password'].value,
    };
    this.isLoding = true;
    this.http.post(url,obj,this.headers).subscribe((res)=>{
      console.log(res);
      this.isLoding = false;
      this.router.navigate(['/recipe']);
    },(err)=>{
      this.isLoding = false;

    });
  }
}
hasError(controlName:string,errorName:string) {
  return this.formGroup.controls[controlName].touched && this.formGroup.controls[controlName].hasError(errorName);
}


}
