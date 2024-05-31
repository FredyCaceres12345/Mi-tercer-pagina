import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscuelaEditPage } from './escuela-edit.page';

const routes: Routes = [
  {
    path: '',
    component: EscuelaEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscuelaEditPageRoutingModule {}
