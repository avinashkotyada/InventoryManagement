import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { InventoryPage } from '../components/inventory/inventory.page';
import { StockPage } from '../components/stock/stock.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'inventory',
    loadChildren: () => import('../components/inventory/inventory.module').then(m => m.InventoryPageModule)
  },
  {
    path: 'stock',
    loadChildren: () => import('../components/stock/stock.module').then(m => m.StockPageModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
