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
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

