import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageAboutComponent } from 'app/components/routes/page-about/page-about.component';
import { PageBlogComponent } from 'app/components/routes/page-blog/page-blog.component';
import { PageContactComponent } from 'app/components/routes/page-contact/page-contact.component';
import { PageNotFoundComponent } from 'app/components/routes/page-not-found/page-not-found.component';


const appRoutes: Routes = [
  { path: 'about', component: PageAboutComponent },
  { path: 'blog', component: PageBlogComponent },
  { path: 'contact', component: PageContactComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
