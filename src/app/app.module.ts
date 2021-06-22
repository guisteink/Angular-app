import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './components/home/home/home.component';
import { DetailClientComponent } from './components/detail/detail-client/detail-client.component';
import { DetailEnterpriseComponent } from './components/detail/detail-enterprise/detail-enterprise.component';
import { PagesModule } from './pages/pages.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { FormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DetailClientComponent,
    DetailEnterpriseComponent,
  ],
  imports: [
    FlexLayoutModule,
    PagesModule,
    MatGridListModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatBadgeModule,
    FormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
