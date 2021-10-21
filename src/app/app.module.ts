import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBvfWmwUNfDduXdU-0wiTRqWxK1jZH2R20',
      libraries: ['places'],
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
