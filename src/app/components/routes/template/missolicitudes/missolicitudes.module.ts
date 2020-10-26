import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissolicitudesComponent } from './missolicitudes/missolicitudes.component';
import { CardsolicitudesModule } from '../components/cardsolicitudes/cardsolicitudes.module';




const routes: Routes = [
  { path: 'misolicitud', component: MissolicitudesComponent },
  { path: 'cardsolicitud', component: CardsolicitudesModule },
];

@NgModule({
  declarations: [
    MissolicitudesComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CardsolicitudesModule,
    CommonModule
  ],
  exports: [
    MissolicitudesComponent,
    RouterModule
 ]
})
export class MissolicitudesModule { }
