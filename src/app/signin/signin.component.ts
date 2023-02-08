import { Component , OnInit } from '@angular/core';
import { SocialAuthService , GoogleLoginProvider } from "@abacritt/angularx-social-login";
import { SocialUser } from "@abacritt/angularx-social-login";




@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {


  // user: any;
  // loggedIn: any;
  
  user: SocialUser | undefined;
  loggedIn: boolean | undefined;


  constructor(private authService: SocialAuthService) { }

  refreshToken(): void {
    this.authService.refreshAccessToken(GoogleLoginProvider.PROVIDER_ID);
  }
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.loggedIn);
      console.log(this.user);
    });

    
  }






}
