import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  //template: "<store> </store>",
  template: "<router-outlet> </router-outlet>",
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'onlinestore';
}
