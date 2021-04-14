import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { AuthService } from "./auth.service";
@Injectable({
  providedIn: "root",
})
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}

  canActivate(): boolean {
    if (this.auth.loggedIn()) {
      return true;
    }
    //change the path in [''] to re-route where u want to take the un-authenticated user
    this.router.navigate(["login"]);
  }
}
