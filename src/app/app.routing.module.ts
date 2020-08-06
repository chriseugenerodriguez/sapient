import { NgModule } from '@angular/core';

// ROUTING
import { Routes, RouterModule } from '@angular/router';

// LAZY ROUTES
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.component').then(m =>
      m.HomeComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
