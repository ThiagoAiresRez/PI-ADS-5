import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs/Observable"
import {Injectable, Injector} from "@angular/core";
import { LoginService } from "./login/login.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private Injector: Injector) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        const loginService = this.Injector.get(LoginService)
        if(loginService.isLoggedIn()){
            const authRequest = request.clone(
                  {setHeaders:{'Authorization' : `Bearer ${loginService.user.accessToken}`}})
            return next.handle(authRequest)
        }else{
            return next.handle(request)
        }

    }
}