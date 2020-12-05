import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
//here is the base ground model
platformBrowserDynamic().bootstrapModule(AppModule).catch(e=>{
  console.error(e)
})
  .catch(err => console.error(err));
