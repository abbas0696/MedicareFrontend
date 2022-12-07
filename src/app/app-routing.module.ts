import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcustComponent } from './addcust/addcust.component';
import { AddprodComponent } from './addprod/addprod.component';
import { AdduserComponent } from './adduser/adduser.component';
import { CustdetailsComponent } from './custdetails/custdetails.component';
import { CustlistComponent } from './custlist/custlist.component';
import { EditcustComponent } from './editcust/editcust.component';
import { ProddetailsComponent } from './proddetails/proddetails.component';
import { ProdlistComponent } from './prodlist/prodlist.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  {path: "list", component:CustlistComponent},
  {path: "addcust", component:AddcustComponent},
  {path: "details/:id", component:CustdetailsComponent},
  {path: "edit/:id", component:EditcustComponent},
  {path: "prodlist", component:ProdlistComponent},
  {path: "addprod", component:AddprodComponent},
  {path: "prodetails/:id", component:ProddetailsComponent},
  {path: "adduser", component:AdduserComponent},
  {path: "userlist", component:UserlistComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
