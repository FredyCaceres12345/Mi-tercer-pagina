import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscuelaListPageRoutingModule } from './escuela-list-routing.module';

import { EscuelaListPage } from './escuela-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscuelaListPageRoutingModule
  ],
  declarations: [EscuelaListPage]
})
export class EscuelaListPageModule {}
