import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
//angular material
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from "@angular/material/paginator";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";

//components
import { LoginComponent } from './components/login/login.component';
import { HomeComponent} from "./components/hotelmanager/home/home.component";
import {EmployeesService} from "./components/services/employees.service";
import {MatSliderModule} from "@angular/material/slider";
import {EmployeesComponent} from "./components/hotelmanager/employees/employees.component";
import {RoomsComponent} from "./components/hotelmanager/rooms/rooms.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {HotelmanagerComponent} from "./components/hotelmanager/hotelmanager.component";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {NavbarComponent} from "./components/hotelmanager/navbar/navbar.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";

import { HttpClientModule } from "@angular/common/http";
import { ClientsComponent } from './components/hotelmanager/clients/clients.component';
import { RegisterclientsComponent } from './components/hotelmanager/registerclients/registerclients.component';
import { InventoryComponent } from './components/hotelmanager/inventory/inventory.component';
import { HotelesComponent } from './components/hotelguest/hoteles/hoteles.component';
import { HomeGComponent } from './components/hotelguest/home-g/home-g.component';
import { NavbarGComponent } from './components/hotelguest/navbar-g/navbar-g.component';
import {HotelsService} from "./components/services/hotels.service";






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    EmployeesComponent,
    RoomsComponent,
    HotelmanagerComponent,
    NavbarComponent,
    ClientsComponent,
    RegisterclientsComponent,
    InventoryComponent,
    HotelesComponent,
    HomeGComponent,
    NavbarGComponent


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    MatSliderModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatCardModule,
    MatPaginatorModule,
    FormsModule,
    MatSortModule,
    MatTableModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [EmployeesService,
  HotelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }


