import { Component , OnInit } from '@angular/core';
import { SocialAuthService } from "@abacritt/angularx-social-login";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor( private authService: SocialAuthService ) { }

  user: any;
  loggedIn: any;



  ngOnInit(): void {
    // this.authService.authState.subscribe((user) => {
    //   this.user = user;
    //   this.loggedIn = (user != null);
    // });
  }
}
