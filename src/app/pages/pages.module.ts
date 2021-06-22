import { NgModule } from "@angular/core";
import { ClientModule } from "./client/client/client.module";
import { EnterpriseModule } from "./enterprise/enterprise/enterprise.module";

@NgModule({
  imports: [ClientModule, EnterpriseModule,],
})
export class PagesModule { }
