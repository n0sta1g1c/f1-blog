import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthnService {

  constructor(private authn: AngularFireAuth) { }

  login(email: string, password: string): Promise<any> {
    return this.authn.signInWithEmailAndPassword(email, password).then(() => {
      console.log('Auth Service: loginUser: success');
      console.log(this.authn.user);
      // this.router.navigate(['/dashboard']);
  });
  }

  signup(email: string, password: string) {
    return this.authn.createUserWithEmailAndPassword(email, password);
  }

  isUserLoggedIn() {
    return this.authn.user;
  }

  logout() {
    return this.authn.signOut();
  }

}
