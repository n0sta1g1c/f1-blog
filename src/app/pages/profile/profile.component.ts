import { Component, OnInit } from '@angular/core';
import { user } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument, fromCollectionRef } from '@angular/fire/compat/firestore';
import { getFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'app/shared/models/User';
import { AuthnService } from 'app/shared/services/authn.service';
import { UserService } from 'app/shared/services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
  userid?: string;

  emailForm: FormGroup;
  usernameForm: FormGroup;
  passwordForm: FormGroup;
  nameForm: FormGroup;
  loggedInUser?: firebase.default.User | null;

  constructor(private afs: AngularFirestore, private router: Router, private authnService: AuthnService, private afAuthn: AngularFireAuth, private userService: UserService) { 
    this.emailForm = new FormGroup({
      newEmail: new FormControl(''),
      renewEmail: new FormControl('')
    });
    this.usernameForm = new FormGroup({
      newUsername: new FormControl('')
    });
    this.passwordForm = new FormGroup({
      password: new FormControl(''),
      newPassword: new FormControl('')
    });
    this.nameForm = new FormGroup({
      newName: new FormGroup({
        newFirstname: new FormControl(''),
        newLastname: new FormControl('')
      })
    });
    
  }

  ngOnInit(): void {
    this.authnService.isUserLoggedIn().subscribe(user => {
      console.log(user);
      this.loggedInUser = user;
      this.userid = this.loggedInUser?.uid
      localStorage.setItem('user', JSON.stringify(this.loggedInUser));
    }, error => {
      console.error(error);
      localStorage.setItem('user', JSON.stringify('null'));
    });

  }

  onChangeEmail(){
    
  }

  onChangeUsername(){

  }

  onChangePW(){

  }

  onChangeName(){

  }

}
