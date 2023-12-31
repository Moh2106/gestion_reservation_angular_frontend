import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ResourcesComponent} from "./resources/resources.component";
import {ReservationsComponent} from "./reservations/reservations.component";
import {PersonnesComponent} from "./personnes/personnes.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path : "",
    component : HomeComponent
  },

  {
    path : "resources",
    component : ResourcesComponent
  },

  {
    path : "reservations",
    component : ReservationsComponent
  },

  {
    path : "personnes",
    component : PersonnesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
