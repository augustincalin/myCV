import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    RouterModule.forRoot([
      { path: '', component: NxWelcomeComponent },
      {
        path: 'doing',
        loadChildren: () =>
          import('@me/my-cv/doing-feature').then(
            (module) => module.MyCvDoingFeatureModule
          ),
      },
    ]),
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
