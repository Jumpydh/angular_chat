import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {AuthService} from "./_helper/auth.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let token = localStorage.getItem("access_token");
    if (token === null) return next.handle(req);
    req = req.clone({
    setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });


    return next.handle(req);
  }
}
