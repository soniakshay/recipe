import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formGroup: FormGroup;
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
      this.router.navigate(['/recipe']);
  } else {
    alert("Invalid");

  }
}


}
