import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PinotApp';

  signedIn = true;
  User = "";

  ngOnInit () {
    if (localStorage.getItem('session') == null || localStorage.getItem('session') == "nonMember"){
      this.signedIn = false;
    }
    else{
      this.signedIn = true;
      this.User = localStorage.getItem('session')?.substring(0,4)+".";
    }
  }
}
