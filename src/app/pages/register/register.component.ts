import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'app/shared/models/User';
import { AuthnService } from 'app/shared/services/authn.service';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  regForm: FormGroup;

  constructor(private router: Router, private authnService: AuthnService, private afAuthn: AngularFireAuth, private userService: UserService) { 
    this.regForm = new FormGroup({
      email: new FormControl(''),
      username: new FormControl(''),
      password: new FormControl(''),
      rePassword: new FormControl(''),
      name: new FormGroup({
        firstname: new FormControl(''),
        lastname: new FormControl('')
      })
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.regForm.value);
    this.authnService.signup(this.regForm.get('email')?.value, this.regForm.get('password')?.value).then(cred => {
      console.log(cred);
      const user: User = {
        id: cred.user?.uid as string,
        email: this.regForm.get('email')?.value,
        username: this.regForm.get('username')?.value,
        name: {
          firstname: this.regForm.get('name.firstname')?.value,
          lastname: this.regForm.get('name.lastname')?.value
        }
      };
      this.userService.create(user).then(_ => {
        this.router.navigateByUrl('/main');
        console.log('User added successfully.');
      }).catch(error => {
        console.error(error);
      })
    }).catch(error => {
      console.error(error);
    });
  }
}
