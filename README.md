# AngularTourOfHeroes
Simple Angular application uses [Keycloak](https://www.keycloak.org/index.html) for authentication

## Get started
This sample project is following the guide from the [tutorial series](https://symbiotics.co.za/integrating-keycloak-with-an-angular-4-web-application-part-5/) and refactor with Angular 6, please read all the parts (five in total)

### Original Repository
[original repository](https://drive.google.com/open?id=0B4H8V7DA5DrJckd5WjNRVHlIZWM)
##### Posssible error from running [original repository](https://drive.google.com/open?id=0B4H8V7DA5DrJckd5WjNRVHlIZWM)
```
Cannot read property 'config' of null
TypeError: Cannot read property 'config' of null
```
it is caused by Angular cli couldn't find `angular.cli.json`<br>
###### Solution
`mv _angular-cli.json angular-cli.json` and run again

### Current Repository 

##### Run
1. start Keycloak server, go to where the Keycloak is saved `/bin/standalone.sh`, more info from [Keycloak guide](https://www.keycloak.org/docs/latest/getting_started/index.html)
2. Add new Realm and users, more info on [part two](https://symbiotics.co.za/integrating-keycloak-with-an-angular-4-web-application-part-2/)
3. `npm install` and `npm run`


##### Required dependencies
`npm install` will install the required dependencies. If want to do it manually, run the command below. <br>
`npm install keycloak-js@latest --save` <br>
Note that the keycloak-js module comes with typed defination, it can directly use in Typescript project.

## Bonus
Check out this package, [keycloak-angular](https://www.npmjs.com/package/keycloak-angular), which provides Easy Keycloak setup for Angular applications.

## Related resources
- [Medium - On-demand login with Keycloak, Angular 4/5, NgRx, Backend API, Bookmark-able links](https://medium.com/@SumanthShankar/on-demand-login-with-keycloak-angular-4-5-ngrx-backend-api-bookmark-able-links-ecb065dc7993)
- [Medium - Connecting Keycloak to Angular](https://medium.com/@blained3/connecting-keycloak-to-angular-d175c92a0dd3)
