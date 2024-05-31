import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscuelaEditPageRoutingModule } from './escuela-edit-routing.module';

import { EscuelaEditPage } from './escuela-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscuelaEditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EscuelaEditPage]
})
export class EscuelaEditPageModule {}
