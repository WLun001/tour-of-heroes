import {Injectable} from '@angular/core';
import {ConnectionBackend, Headers, Http, Request, RequestOptions, RequestOptionsArgs, Response, XHRBackend} from '@angular/http';
import {KeycloakService} from './keycloak.service';
import {from, Observable} from 'rxjs';
import {concatMap, map} from 'rxjs/operators';

@Injectable()
export class KeycloakHttp extends Http {
  constructor(
    backend: ConnectionBackend,
    defaultOption: RequestOptions,
    private keycloakService: KeycloakService) {
    super(backend, defaultOption);
  }


  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    const tokenPromise: Promise<string> = this.keycloakService.getToken();
    const tokenObservable: Observable<any> = from(tokenPromise);
    if (typeof url === 'string') {
      return tokenObservable.pipe(
        map(token => {
          const authOptions = new RequestOptions(
            {headers: new Headers({'Authorization': 'Bearer ' + token})});
          return new RequestOptions().merge(options).merge(authOptions);
        }), concatMap(opts => super.request(url, opts))
      );
    } else {
      return tokenObservable.pipe(
        map(token => {
          url.headers.set('Authorization', 'Bearer ' + token);
          return url;
        }), concatMap(request => super.request(request))
      );
    }
  }
}

export function keycloakHttpFactory(
  backend: XHRBackend,
  defaultOptions: RequestOptions,
  keycloakService: KeycloakService) {
  return new KeycloakHttp(backend, defaultOptions, keycloakService);
}
