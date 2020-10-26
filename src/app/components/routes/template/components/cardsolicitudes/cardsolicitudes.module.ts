import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsolicitudesComponent } from './cardsolicitudes/cardsolicitudes.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'cardsolicitud', component: CardsolicitudesComponent },
];


@NgModule({
  declarations: [
    CardsolicitudesComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    CardsolicitudesComponent
]
})
export class CardsolicitudesModule { }
