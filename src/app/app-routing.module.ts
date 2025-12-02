import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './component/profile/profile.component';
import { ProfileDetailComponent } from './component/profile-detail/profile-detail.component';

const routes: Routes = [
  // { path: 'profile', component: ProfileComponent},
  // { path: 'profile/:id', component: ProfileDetailComponent }
  // { path: 'profile', 
  //   component: ProfileComponent, 
  //   children: [
  //     { path: ':id', component: ProfileDetailComponent }
  //   ]
  // },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
