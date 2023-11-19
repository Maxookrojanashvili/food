import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';
import { BasketComponent } from './basket/basket.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'basket', component: BasketComponent },
  { path: '', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
