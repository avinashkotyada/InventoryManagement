import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inventory',
    loadChildren: () => import('./components/inventory/inventory.module').then( m => m.InventoryPageModule)
  },
  {
    path: 'stock/:id',
    loadChildren: () => import('./components/stock/stock.module').then( m => m.StockPageModule)
  },
  {
    path: 'requests',
    loadChildren: () => import('./components/allocations/allocations.module').then( m => m.AllocationsPageModule)
  },
  {
    path: 'allocations',
    loadChildren: () => import('./components/allocations/allocations.module').then( m => m.AllocationsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
