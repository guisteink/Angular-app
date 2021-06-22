import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { EnterpriseComponent } from './enterprise.component';
import { EnterpriseService } from 'src/app/services/enterprise.service';
import { CommonModule } from '@angular/common';
import { DetailEnterpriseComponent } from 'src/app/components/detail/detail-enterprise/detail-enterprise.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms'
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';

export const EnterpriseRoutes: Routes = [
  {
    path: 'all',
    component: EnterpriseComponent
  },
  {
    path: ':id',
    component: DetailEnterpriseComponent
  },
  {
    path: 'name/:name',
    component: DetailEnterpriseComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatGridListModule
  ],
  declarations: [EnterpriseComponent],
  providers: [EnterpriseService]
})
export class EnterpriseModule { }
