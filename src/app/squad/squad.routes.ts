import { Routes } from '@angular/router';
import { Cart } from '../cart/cart';
import { SquadCatalog } from './squad-catalog/squad-catalog';

export const squadRoutes: Routes = [
  { path: 'bot-squad', component: SquadCatalog, title: "Bot Squad - Joe's Robot Shop" },
  { path: 'squad-cart', component: Cart, title: "Squad Cart - Joe's Robot Shop" },
];
