import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLoading = false;

  constructor(private router: Router, private authService: AuthService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  onLogin() {
    this.isLoading = true;
    this.authService.login();
    this.loadingCtrl
    .create({keyboardClose: true, message: 'Logging in, buddy...'})
    .then(loadingEl => {
      loadingEl.present();
      setTimeout(() => {
        this.isLoading = false;
        loadingEl.dismiss();
        this.router.navigateByUrl('/plans');
      }, 1500);
    });

  }

}
