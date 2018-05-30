import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Headers, Http } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
@Injectable()
export class UserService {
  public auToken: string;
  public user: any;

  constructor(private _http: HttpClient,
    private http: Http,

  ) { }

  onRegister(body: any) {
    return this._http.post('http://127.0.0.1:3001/users/register', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  onLogin(body: any) {
    return this._http.post('http://127.0.0.1:3001/users/signin', body, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  storeDataUser(token, user) {
    this.auToken = token;
    this.user = user;
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }


  getProfile() {
    this.loadToken();
    return this._http
      .get('http://localhost:3001/users/secret', {
        headers: new HttpHeaders().set('Authorization', this.auToken)
      });
  }
  loadToken() {
    const token = localStorage.getItem('token');
    this.auToken = token;
  }
  logout() {
    this.auToken = null;
    this.user = null;
    localStorage.clear();
  }
  isLogin() {
    return tokenNotExpired();
  }
}