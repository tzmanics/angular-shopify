import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { CartTableComponent } from '../cart-table/cart-table.component';

@NgModule({
  declarations: [CartComponent, CartTableComponent],
  imports: [CommonModule, CartRoutingModule],
})
export class CartModule {}
