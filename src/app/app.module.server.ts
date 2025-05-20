import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { provideServerRouting } from '@angular/ssr';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { RouterOutlet } from '@angular/router';

@NgModule({
  imports: [AppModule, ServerModule],
  providers: [RouterOutlet],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
