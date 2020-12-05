import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BaseModule } from 'app/base/base.module';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
//here is the base ground model
platformBrowserDynamic().bootstrapModule(BaseModule).catch(e=>{
  console.error(e)
})
