import { Component, OnInit } from '@angular/core';
import { TabsetConfig } from 'ngx-bootstrap/tabs';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export function getTabsetConfig(): TabsetConfig {
  return Object.assign(new TabsetConfig(), { type: 'pills' });
}

@Component({
  selector: 'aerodyne-auth',
  templateUrl: './auth.component.html',
  providers: [{ provide: TabsetConfig, useFactory: getTabsetConfig }]
})
export class AuthComponent implements OnInit {
  form: FormGroup;
  validText: boolean = false;

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });
  }


  loginUser(e) {
    e.preventDefault();
    console.log(e);
    const userName = e.target.elements[0].value;
    const passWord = e.target.elements[1].value;

    if (userName === 'evoteq' && passWord === 'proto@123') {
      this.validText = false;
      this.router.navigate(['home']);
    } else {
      this.validText = true;
    }
  }

  forget(){
    console.log("Forget")
  }
}
