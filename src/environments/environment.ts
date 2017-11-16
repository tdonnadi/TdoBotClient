// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// d'origine tibot utilise 
//wsUrl: 'ws://tdotelebotserver.herokuapp.com'
//ws://localhost:4040

export const environment = {
  production: false,
  wsUrl: 'ws://localhost:8080'
};
