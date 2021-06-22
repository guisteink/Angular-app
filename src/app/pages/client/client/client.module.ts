import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { ClientComponent } from './client.component';
import { ClientService } from 'src/app/services/client.service';
import { DetailClientComponent } from 'src/app/components/detail/detail-client/detail-client.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms'
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';

export const ClientRoutes: Routes = [
  {
    path: 'all',
    component: ClientComponent //todos os clients
  },
  {
    path: 'name/:name',
    component: DetailClientComponent //detalhe de um client por name
  },
  {
    path: ':id',
    component: DetailClientComponent //detalhe de um client por id
  },
  {
    path: ':id/totals',
    component: ClientComponent //totals de um client
  },
  {
    path: ':id/enterprise',
    component: ClientComponent //enterprises de um client
  },
  {
    path: ':id/enterprise/name/:name',
    component: ClientComponent //enterprise de um client by name and name
  },
];

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatGridListModule],
  declarations: [ClientComponent],
  providers: [ClientService]
})
export class ClientModule { }
