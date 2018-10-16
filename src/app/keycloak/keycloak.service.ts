import {Injectable} from '@angular/core';
import * as Keycloak from 'keycloak-js';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {
  static auth: any = {};

  constructor() {
  }


  static init(): Promise<any> {
    const keycloakAuth = Keycloak({
      url: environment.keycloakRootUrl,
      realm: 'tester',
      clientId: '123',
      'ssl-required': 'external',
      'public-client': true
    });

    this.auth.loggedIn = false;

    return new Promise((resolve, reject) => {
      keycloakAuth.init({onLoad: 'login-required'}).success(() => {
        console.log(keycloakAuth);
        this.auth.loggedIn = true;
        this.auth.authz = keycloakAuth;
        this.auth.logoutUrl = keycloakAuth.authServerUrl
          + 'realms/tester/protocol/openid-connect/logout?redirect_uri=' +
          document.baseURI;
        resolve();
      }).error(() => {
        reject();
      });
    });
  }

  static logout() {
    console.log('** LOGOUT');
    this.auth.loggedIn = false;
    this.auth.authz = null;

    window.location.href = this.auth.logoutUrl;
  }

  static getUsername(): string {
    return KeycloakService.auth.authz.tokenParsed.preferred_username;
  }

  static getFullName(): string {
    return KeycloakService.auth.authz.tokenParsed.name;
  }

  getToken(): Promise<string> {
    return new Promise((resolve, reject) => {
      if (KeycloakService.auth.authz.token) {
        KeycloakService.auth.authz.updateToken(5).success(() => {
          resolve(<string>KeycloakService.auth.authz.token);
        }).error(() => reject('Failed to refresh token'));
      } else {
        reject('Not logged in');
      }
    });
  }
}
