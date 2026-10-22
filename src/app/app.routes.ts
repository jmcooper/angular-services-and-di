import { Routes } from '@angular/router';
import { Catalog } from './catalog/catalog';
import { Search } from './catalog/search/search';
import { Cart } from './cart/cart';

export const routes: Routes = [
  { path: 'catalog', component: Catalog, title: "Catalog - Joe's Robot Shop" },
  { path: 'search', component: Search, title: "Search - Joe's Robot Shop" },
  { path: 'cart', component: Cart, title: "Cart - Joe's Robot Shop" },
  { path: 'squad', loadChildren: () => import('./squad/squad.routes').then((m) => m.squadRoutes) },
  { path: '', redirectTo: '/catalog', pathMatch: 'full' },
];
