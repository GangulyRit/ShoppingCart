import { Component } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  constructor(private afAuth: AngularFireAuth) {}

  login() {
    this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
  }
}
