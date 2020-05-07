import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppComponent } from './app.component';
import { MainNavbarComponent } from './navigation/main-navbar/main-navbar.component';
import { TopNavbarComponent } from './navigation/top-navbar/top-navbar.component';
import { SidebarComponent } from './navigation/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LocationsComponent } from './dashboard/locations/locations.component';
import { LocationDetailsComponent } from './dashboard/location-details/location-details.component';
import { PickupTimeComponent } from './dashboard/location-details/pickup-time/pickup-time.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarrierServicesComponent } from './dashboard/location-details/carrier-services/carrier-services.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    TopNavbarComponent,
    SidebarComponent,
    DashboardComponent,
    LocationsComponent,
    LocationDetailsComponent,
    PickupTimeComponent,
    CarrierServicesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
