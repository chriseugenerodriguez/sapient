import { NgModule } from '@angular/core';

// ROUTING
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// LAZY ROUTES
const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/product-details/product-details.module').then(m => m.ProductDetailsModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
