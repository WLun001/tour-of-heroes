import { Component } from '@angular/core';
import {KeycloakService} from './keycloak/keycloak.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counterValue = 5;
  title = 'Tour of Heroes';

    decrement() {
    this.counterValue--;
  }

  increment() {
    this.counterValue++;
  }

  logout() {
    KeycloakService.logout();
  }
}
