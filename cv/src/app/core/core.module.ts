import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'about',
    component: MainComponent
  }
];
@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class CoreModule {}
