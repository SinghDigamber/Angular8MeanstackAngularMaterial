import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  //fetch token from localStorage @token is the jwt sent by backend after successful login
  public token = localStorage.getItem("TOKEN");
  constructor() {}

  loggedIn() {
    if (this.token) {
      return true;
    }
    return false;
  }
}
