import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { AppRoutingModule } from './app-routing.module';
import { GestaoUsuariosComponent } from './gestao-usuarios/gestao-usuarios.component';

@NgModule({
  declarations: [AppComponent, ItemComponent, GestaoUsuariosComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [provideClientHydration(withEventReplay())],
  bootstrap: [AppComponent],
})
export class AppModule {}
