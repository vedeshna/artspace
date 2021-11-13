// Deals with the routings of this project
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './auth.guard';
import { ArtistsComponent } from './components/artists/artists.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { AccountComponent } from './components/account/account.component';

//All the routes
const routes: Routes = [
  {
    path: '',
    redirectTo: '/landingpage',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'landingpage',
    component: LandingpageComponent
  },
  {
    path: 'artists',
    component: ArtistsComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'account/:id',
    component: AccountComponent
  },
  {
    path: 'aboutus',
    component: AboutusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
