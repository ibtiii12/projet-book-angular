import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authStatus: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authStatus = this.authService.isAuth; // 
  }

  onSignIn() {  // fonction responsable de l'inscription
    this.authService.signIn().then(
      () => {
        this.authStatus = this.authService.isAuth;
        console.log('Sign in successful!'); // afficher 'sign in succesful' apres s'inscrire.        
        this.router.navigate(['appareils']);  // apres sign in , changer le route vers la liste des appareils.
       }
    );
}

  onSignOut() { // fonction  responsable de  logout apres l'inscription.
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }


}
