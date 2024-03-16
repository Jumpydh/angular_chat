import {inject, Injectable} from '@angular/core';
import {Observable, pipe, tap} from "rxjs";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private authSecretKey = 'Bearer Token';

  constructor(private http: HttpClient) {
    this.isAuthenticated = localStorage.getItem("access_token") !== null;
    console.log(localStorage.getItem("access_token"));
  }

  login(username: string, password: string) {
    return this.http.post('/api/auth/login', {username, password}, {responseType: "text"}).pipe(tap(data => {

      console.log(data)
      if (data === undefined) return false;
      let json = JSON.parse(data);
      this.authSecretKey = json.jwt;

      this.isAuthenticated = json.jwt.length > 32;
      localStorage
        .setItem("access_token",json.jwt);
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
    localStorage.removeItem("access_token");
    this.isAuthenticated = false;
  }
}
