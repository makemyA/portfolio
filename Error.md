
# Log Error


```js
$ heroku logs --tail
2018-11-12T21:48:39.499751+00:00 app[api]: Initial release by user henrot.paul@gmail.com
2018-11-12T21:48:39.499751+00:00 app[api]: Release v1 created by user henrot.paul@gmail.com
2018-11-12T21:48:39.880433+00:00 app[api]: Enable Logplex by user henrot.paul@gmail.com
2018-11-12T21:48:39.880433+00:00 app[api]: Release v2 created by user henrot.paul@gmail.com
2018-11-12T21:55:40.000000+00:00 app[api]: Build started by user henrot.paul@gmail.com
2018-11-12T21:57:09.616021+00:00 app[api]: Scaled to web@1:Free by user henrot.paul@gmail.com
2018-11-12T21:57:09.587716+00:00 app[api]: Deploy 99d0a112 by user henrot.paul@gmail.com
2018-11-12T21:57:09.587716+00:00 app[api]: Release v3 created by user henrot.paul@gmail.com
2018-11-12T21:57:21.953894+00:00 heroku[web.1]: Starting process with command `npm start`
2018-11-12T21:57:24.153447+00:00 heroku[web.1]: State changed from starting to crashed
2018-11-12T21:57:24.155637+00:00 heroku[web.1]: State changed from crashed to starting
2018-11-12T21:57:24.130819+00:00 heroku[web.1]: Process exited with status 1
2018-11-12T21:57:21.000000+00:00 app[api]: Build succeeded
2018-11-12T21:57:40.345868+00:00 heroku[web.1]: Starting process with command `npm start`
2018-11-12T21:57:44.579428+00:00 heroku[web.1]: Process exited with status 1
2018-11-12T21:57:44.601802+00:00 heroku[web.1]: State changed from starting to crashed
2018-11-12T21:57:44.243267+00:00 app[web.1]:
2018-11-12T21:57:44.243287+00:00 app[web.1]: > portfolio_makemya@0.1.0 start /app
2018-11-12T21:57:44.243289+00:00 app[web.1]: > node scripts/start.js
2018-11-12T21:57:44.243290+00:00 app[web.1]:
2018-11-12T21:57:44.435730+00:00 app[web.1]: internal/modules/cjs/loader.js:582
2018-11-12T21:57:44.435733+00:00 app[web.1]: throw err;
2018-11-12T21:57:44.435735+00:00 app[web.1]: ^
2018-11-12T21:57:44.435736+00:00 app[web.1]:
2018-11-12T21:57:44.435738+00:00 app[web.1]: Error: Cannot find module 'webpack'
2018-11-12T21:57:44.435740+00:00 app[web.1]: at Function.Module._resolveFilename (internal/modules/cjs/loader.js:580:15)
2018-11-12T21:57:44.435741+00:00 app[web.1]: at Function.Module._load (internal/modules/cjs/loader.js:506:25)
2018-11-12T21:57:44.435743+00:00 app[web.1]: at Module.require (internal/modules/cjs/loader.js:636:17)
2018-11-12T21:57:44.435745+00:00 app[web.1]: at require (internal/modules/cjs/helpers.js:20:18)
2018-11-12T21:57:44.435746+00:00 app[web.1]: at Object.<anonymous> (/app/scripts/start.js:20:17)
2018-11-12T21:57:44.435748+00:00 app[web.1]: at Module._compile (internal/modules/cjs/loader.js:688:30)
2018-11-12T21:57:44.435752+00:00 app[web.1]: at Object.Module._extensions..js (internal/modules/cjs/loader.js:699:10)
2018-11-12T21:57:44.435754+00:00 app[web.1]: at Module.load (internal/modules/cjs/loader.js:598:32)
2018-11-12T21:57:44.435755+00:00 app[web.1]: at tryModuleLoad (internal/modules/cjs/loader.js:537:12)
2018-11-12T21:57:44.435757+00:00 app[web.1]: at Function.Module._load (internal/modules/cjs/loader.js:529:3)
2018-11-12T21:57:44.444928+00:00 app[web.1]: npm ERR! code ELIFECYCLE
2018-11-12T21:57:44.446527+00:00 app[web.1]: npm ERR! errno 1
2018-11-12T21:57:44.448241+00:00 app[web.1]: npm ERR! portfolio_makemya@0.1.0 start: `node scripts/start.js`
2018-11-12T21:57:44.448499+00:00 app[web.1]: npm ERR! Exit status 1
2018-11-12T21:57:44.451100+00:00 app[web.1]: npm ERR!
2018-11-12T21:57:44.451345+00:00 app[web.1]: npm ERR! Failed at the portfolio_makemya@0.1.0 start script.
2018-11-12T21:57:44.451581+00:00 app[web.1]: npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
2018-11-12T21:57:44.482232+00:00 app[web.1]:
2018-11-12T21:57:44.482232+00:00 app[web.1]:
2018-11-12T21:57:44.482555+00:00 app[web.1]: npm ERR! A complete log of this run can be found in:
2018-11-12T21:57:44.482750+00:00 app[web.1]: npm ERR!     /app/.npm/_logs/2018-11-12T21_57_44_453Z-debug.log                                                                                   1ef f2018-11-12T21:57:46.203143+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/" host=afternoon-ridge-43051.herokuapp.com request_id=92b1d0e6-54a0-47a5-ab21-3606125151ef fwd="85.201.18.37" dyno= connect= service= status=503 bytes= protocol=https                                                                                                                -ea0a2018-11-12T21:57:46.722979+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/robots.txt" host=afternoon-ridge-43051.herokuapp.com request_id=24c682e6-5635-46ee-87192018-11-12T21:57:46.203143+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/" host=afternoon-ridge-43051.hero                                                      7-468kuapp.com request_id=92b1d0e6-54a0-47a5-ab21-3606125151ef fwd="85.201.18.37" dyno= connect= service= status=503 bytes= protocol=https    -43051.herokuapp.com request_id=b14d70f4-bc9c-471d-ac62018-11-12T21:57:46.722979+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/robots.txt" host=afternoon-ridge-                                                      7e5 f43051.herokuapp.com request_id=24c682e6-5635-46ee-8719-ea0a4d750121 fwd="85.201.18.37" dyno= connect= service= status=503 bytes= protocolkuapp.com request_id=606f19f9-be14-4e50-a744-e9dbcfc67=https                                                                                                                                                                                         a-9752018-11-12T21:57:49.297370+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/favicon.ico" host=afternoon-ridge-43051.herokuapp.com request_id=744d9d13-007b-46c6-860-43051.herokuapp.com request_id=b14d70f4-bc9c-471d-ac67-4685149f08a9 fwd="85.201.18.37" dyno= connect= service= status=503 bytes= protocol=https
2018-11-12T22:05:55.224676+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/" host=afternoon-ridge-43051.herokuapp.com request_id=606f19f9-be14-4e50-a744-e9dbcfc677e5 fwd="85.201.18.37" dyno= connect= service= status=503 bytes= protocol=https
2018-11-12T22:05:58.165023+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/favicon.ico" host=afternoon-ridge-43051.herokuapp.com request_id=744d9d13-007b-46c6-860a-975e5642a2be fwd="85.201.18.37" dyno= connect= service= status=503 bytes= protocol=https
2018-11-12T22:19:37.659504+00:00 heroku[web.1]: State changed from crashed to starting
2018-11-12T22:20:18.394021+00:00 heroku[web.1]: Starting process with command `npm start`
2018-11-12T22:20:23.476362+00:00 heroku[web.1]: Process exited with status 1
2018-11-12T22:20:23.086730+00:00 app[web.1]:
2018-11-12T22:20:23.086746+00:00 app[web.1]: > portfolio_makemya@0.1.0 start /app
2018-11-12T22:20:23.086747+00:00 app[web.1]: > node scripts/start.js
2018-11-12T22:20:23.086749+00:00 app[web.1]:
2018-11-12T22:20:23.322026+00:00 app[web.1]: internal/modules/cjs/loader.js:582
2018-11-12T22:20:23.322029+00:00 app[web.1]: throw err;
2018-11-12T22:20:23.322030+00:00 app[web.1]: ^
2018-11-12T22:20:23.322032+00:00 app[web.1]:
2018-11-12T22:20:23.322033+00:00 app[web.1]: Error: Cannot find module 'webpack'
2018-11-12T22:20:23.322035+00:00 app[web.1]: at Function.Module._resolveFilename (internal/modules/cjs/loader.js:580:15)
2018-11-12T22:20:23.322036+00:00 app[web.1]: at Function.Module._load (internal/modules/cjs/loader.js:506:25)
2018-11-12T22:20:23.322038+00:00 app[web.1]: at Module.require (internal/modules/cjs/loader.js:636:17)
2018-11-12T22:20:23.322040+00:00 app[web.1]: at require (internal/modules/cjs/helpers.js:20:18)
2018-11-12T22:20:23.322041+00:00 app[web.1]: at Object.<anonymous> (/app/scripts/start.js:20:17)
2018-11-12T22:20:23.322043+00:00 app[web.1]: at Module._compile (internal/modules/cjs/loader.js:688:30)
2018-11-12T22:20:23.322044+00:00 app[web.1]: at Object.Module._extensions..js (internal/modules/cjs/loader.js:699:10)
2018-11-12T22:20:23.322046+00:00 app[web.1]: at Module.load (internal/modules/cjs/loader.js:598:32)
2018-11-12T22:20:23.322047+00:00 app[web.1]: at tryModuleLoad (internal/modules/cjs/loader.js:537:12)
2018-11-12T22:20:23.322049+00:00 app[web.1]: at Function.Module._load (internal/modules/cjs/loader.js:529:3)
2018-11-12T22:20:23.329270+00:00 app[web.1]: npm ERR! code ELIFECYCLE                                                                      ove.
2018-11-12T22:20:23.329905+00:00 app[web.1]: npm ERR! errno 1
2018-11-12T22:20:23.331652+00:00 app[web.1]: npm ERR! portfolio_makemya@0.1.0 start: `node scripts/start.js`
2018-11-12T22:20:23.331903+00:00 app[web.1]: npm ERR! Exit status 1
2018-11-12T22:20:23.332269+00:00 app[web.1]: npm ERR!
2018-11-12T22:20:23.332540+00:00 app[web.1]: npm ERR! Failed at the portfolio_makemya@0.1.0 start script.
2018-11-12T22:20:23.332792+00:00 app[web.1]: npm ERR! This is probably not a problem with npm. There is likely additional logging output above.2018-11-12T22:20:23.352922+00:00 app[web.1]:
2018-11-12T22:20:23.362243+00:00 app[web.1]: npm ERR! A complete log of this run can be found in:
2018-11-12T22:20:23.362247+00:00 app[web.1]: npm ERR!     /app/.npm/_logs/2018-11-12T22_20_23_334Z-debug.log
2018-11-12T22:20:23.500662+00:00 heroku[web.1]: State changed from starting to crashed
 !    Logs eventsource failed with: 401 Unauthorized
```