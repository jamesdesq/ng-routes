import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent},
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: 'welcome', component: PageNotFoundComponent},
];

@NgModule({
  // RouterModule.forRoot()
  // declares the router directives
  // manages our route configuration
  // registers the router service
  // used once for the application

  // It is the corollary of RouterModule.forChild()
  // which also declares the router directives and manages route configuration 
  // but does not register the router service and is usually used in feature modules
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
