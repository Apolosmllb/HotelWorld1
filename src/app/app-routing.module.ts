import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {HotelmanagerComponent} from "./components/hotelmanager/hotelmanager.component";
import {EmployeesComponent} from "./components/hotelmanager/employees/employees.component";
import {HomeComponent} from "./components/hotelmanager/home/home.component";
import {RoomsComponent} from "./components/hotelmanager/rooms/rooms.component";
import {ClientsComponent} from "./components/hotelmanager/clients/clients.component";
import {InventoryComponent} from "./components/hotelmanager/inventory/inventory.component";
import {RegisterclientsComponent} from "./components/hotelmanager/registerclients/registerclients.component";


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component:LoginComponent },
  { path: 'hotelmanager',component:HomeComponent},
  { path: 'rooms',component:RoomsComponent},
  { path: 'home',component:HomeComponent},
  { path: 'clients',component:ClientsComponent},
  { path: 'employees',component:EmployeesComponent},
  { path: 'invetory',component:InventoryComponent},
  { path: 'registerclients',component:RegisterclientsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
