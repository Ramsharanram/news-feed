import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }, { path: 'create', loadChildren: () => import('./create/create.module').then(m => m.CreateModule) }, { path: 'list', loadChildren: () => import('./list/list.module').then(m => m.ListModule) }, { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }, { path: 'view', loadChildren: () => import('./view/view.module').then(m => m.ViewModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
