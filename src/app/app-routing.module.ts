import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'escuela-list',
    loadChildren: () => import('./escuela/escuela-list/escuela-list.module').then( m => m.EscuelaListPageModule)
  },
  {
    path: 'escuela-edit',
    loadChildren: () => import('./escuela/escuela-edit/escuela-edit.module').then( m => m.EscuelaEditPageModule)
  },
  {
    path: 'escuela-edit/:id',
    loadChildren: () => import('./escuela/escuela-edit/escuela-edit.module').then( m => m.EscuelaEditPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
