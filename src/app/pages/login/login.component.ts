import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthnService } from '../../shared/services/authn.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy{

  loginForm: FormGroup;

  //email = new FormControl('');
  //password = new FormControl('');

  loadingSubscription?: Subscription;
  loadingObservation?: Observable<boolean>;

  loading: boolean = false;

  constructor(private router: Router, private authnService: AuthnService, private afAuthn: AngularFireAuth) { 
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required)
  });

  }

  ngOnInit(): void {
  }

  async login() {
    console.log(this.loginForm.value.email, this.loginForm.value.password)
    /*this.loading = true;*/
      this.authnService.login(this.loginForm.value.email, this.loginForm.value.password).then(cred => {
        console.log(cred);
        this.router.navigateByUrl('/main');
        //this.loading = false;
      }).catch(error => {
        console.error(error);
        this.loading = false;
      });
      
  }

  ngOnDestroy() {
    this.loadingSubscription?.unsubscribe();
  }
}
