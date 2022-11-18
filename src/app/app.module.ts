import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { SupabaseService } from './common/service/supabase.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, SupabaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
