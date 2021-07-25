import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'menu-price',
    loadChildren: () => import('./menu-price/menu-price.module').then( m => m.MenuPricePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'menu-newspaper',
    loadChildren: () => import('./menu-newspaper/menu-newspaper.module').then( m => m.MenuNewspaperPageModule)
  },
  {
    path: 'menu-table',
    loadChildren: () => import('./menu-table/menu-table.module').then( m => m.MenuTablePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'menu-sell',
    loadChildren: () => import('./menu-sell/menu-sell.module').then( m => m.MenuSellPageModule)
  },
  {
    path: 'menu-mysell',
    loadChildren: () => import('./menu-mysell/menu-mysell.module').then( m => m.MenuMysellPageModule)
  },  {
    path: 'location',
    loadChildren: () => import('./location/location.module').then( m => m.LocationPageModule)
  },

  
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
