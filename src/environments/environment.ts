// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  //http://192.168.8.124:8080/api/v1/
  //baseurl: 'http://localhost:3000/customers',

  // dada
  baseurl: 'http://192.168.8.125:8080/cdm/v1/',

  // giktek
  // baseurl: 'http://192.168.0.163:8080/cdm/v1/',
};
