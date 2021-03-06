import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageAboutComponent } from '../../components/routes/page-about/page-about.component';
import { PageContactComponent } from '../../components/routes/page-contact/page-contact.component';
import { PageProduct1Component } from '../../components/routes/products/page-product1/page-product1.component';
import { PageProduct2Component } from '../../components/routes/products/page-product2/page-product2.component';
import { PageNotFoundComponent } from '../../components/routes/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', component: PageAboutComponent },
  { path: 'about', component: PageAboutComponent },
  { path: 'product1', component: PageProduct1Component },
  { path: 'product2', component: PageProduct2Component },
  { path: 'contact', component: PageContactComponent },
  // { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
