import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { ClientRoutes } from './pages/client/client/client.module';
import { EnterpriseRoutes } from "./pages/enterprise/enterprise/enterprise.module";


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "client",
    children: [...ClientRoutes],
  },
  {
    path: "enterprise",
    children: [...EnterpriseRoutes],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
