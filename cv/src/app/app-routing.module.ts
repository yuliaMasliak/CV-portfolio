import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () =>
      import('./core/core.module').then((mod) => mod.CoreModule)
  },
  { path: '', redirectTo: '/main/about', pathMatch: 'full' },
  {
    path: '**',
    loadChildren: () =>
      import('./core/core.module').then((mod) => mod.CoreModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      useHash: false
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

