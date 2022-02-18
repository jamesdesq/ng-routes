import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as auth0 from 'auth0-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth0WebAuth: auth0.WebAuth;
  private authOptions: auth0.AuthOptions;

  constructor(
    private router: Router
  ) { 

    this.authOptions = { 
      domain: 'dev-yrjfm-oh.us.auth0.com',
      clientID: '0DIMI4IuOd962Ci8T2mVAMjwIkXcbCds'
    }

    this.auth0WebAuth = new auth0.WebAuth(this.authOptions);

  }

  public authorise() { 
    this.auth0WebAuth.authorize({
      redirectUri: 'http://localhost:4200/redirect',
      responseType: 'token id_token',
    });
  }

  public parseAccesssToken() { 
    this.auth0WebAuth.parseHash((err, authResult) => { 
      console.log(err);
      console.log(authResult);
    });
  }

  public logout() { 
    this.router.navigate(['/welcome']);  
  }
}
