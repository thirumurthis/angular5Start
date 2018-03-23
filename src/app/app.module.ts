import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';

//using the ng generate component <component name> from the angular cli will include this
//automatically
//If the component is parent child reference, then no need to include in the bootstarp
//else if ther appcompnent and hellocomponent is independent component we use it to include in bootstarp

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,HelloComponent]
})
export class AppModule { }
