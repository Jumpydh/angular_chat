import {inject, Injectable} from '@angular/core';
import {Observable, pipe, tap} from "rxjs";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private authSecretKey = 'Bearer Token';

  public Session = {
    username: '',
    id: ''
  }

  constructor(private http: HttpClient) {
    this.isAuthenticated = localStorage.getItem("access_token") !== null;
    this.Session = JSON.parse(localStorage.getItem("Session") || '{}');
    console.log(localStorage.getItem("access_token"));
  }

  login(username: string, password: string) {
    return this.http.post('/api/auth/login', {username, password}, {responseType: "json"}).pipe(tap((data:any) => {

      this.authSecretKey = data.jwt;
      console.log(data);

      this.Session.username = data.username;
      this.Session.id = data.userId;

      localStorage.setItem("Session", JSON.stringify(this.Session));

      console.log(this.Session);

      this.isAuthenticated = data.jwt.length > 32;
      localStorage
        .setItem("access_token",data.jwt);
      return true;
    }));
  }

  isAuthenticatedUser() {
    return this.isAuthenticated;
  }

  getAuthorizationToken() {
    return localStorage.getItem("access_token");
  }

  logout() {
    localStorage.removeItem("Session");
    localStorage.removeItem("access_token");
    this.isAuthenticated = false;
  }
}
