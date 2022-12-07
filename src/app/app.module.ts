import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustlistComponent } from './custlist/custlist.component';
import { AddcustComponent } from './addcust/addcust.component';
import { CustdetailsComponent } from './custdetails/custdetails.component';
import { EditcustComponent } from './editcust/editcust.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddprodComponent } from './addprod/addprod.component';
import { ProdlistComponent } from './prodlist/prodlist.component';
import { ProddetailsComponent } from './proddetails/proddetails.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UserlistComponent } from './userlist/userlist.component';

@NgModule({
  declarations: [
    AppComponent,
    CustlistComponent,
    AddcustComponent,
    CustdetailsComponent,
    EditcustComponent,
    AddprodComponent,
    ProdlistComponent,
    ProddetailsComponent,
    AdduserComponent,
    UserlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
