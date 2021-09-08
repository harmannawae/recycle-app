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
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'menu-newspaper',
    loadChildren: () => import('./menu-newspaper/menu-newspaper.module').then( m => m.MenuNewspaperPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  
  {
    path: 'menu-mysell',
    loadChildren: () => import('./menu-mysell/menu-mysell.module').then( m => m.MenuMysellPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'menu-post-sell',
    loadChildren: () => import('./menu-post-sell/menu-post-sell.module').then( m => m.MenuPostSellPageModule)
  },
  
  {
    path: 'menu-member',
    loadChildren: () => import('./menu-member/menu-member.module').then( m => m.MenuMemberPageModule)
  },
  {
    path: 'menu-member-show/:id',
    loadChildren: () => import('./menu-member-show/menu-member-show.module').then( m => m.MenuMemberShowPageModule)
  },
  
  {
    path: 'product-get',
    loadChildren: () => import('./product-get/product-get.module').then( m => m.ProductGetPageModule)
  },
  {
    path: 'product-get-edit/:id',
    loadChildren: () => import('./product-get-edit/product-get-edit.module').then( m => m.ProductGetEditPageModule)
  },
  {
    path: 'product-add',
    loadChildren: () => import('./product-add/product-add.module').then( m => m.ProductAddPageModule)
  },
  {
    path: 'manage-member',
    loadChildren: () => import('./manage-member/manage-member.module').then( m => m.ManageMemberPageModule)
  },
  {
    path: 'member-edit/:id',
    loadChildren: () => import('./member-edit/member-edit.module').then( m => m.MemberEditPageModule)
  },
  {
    path: 'register-admin',
    loadChildren: () => import('./register-admin/register-admin.module').then( m => m.RegisterAdminPageModule)
  },
 
  {
    path: 'history-member',
    loadChildren: () => import('./history-member/history-member.module').then( m => m.HistoryMemberPageModule)
  },
  {
    path: 'order-confirm/:id',
    loadChildren: () => import('./order-confirm/order-confirm.module').then( m => m.OrderConfirmPageModule)
  },
  {
    path: 'menu-newspaper-add',
    loadChildren: () => import('./menu-newspaper-add/menu-newspaper-add.module').then( m => m.MenuNewspaperAddPageModule)
  },
  {
    path: 'newspaper-edit/:id',
    loadChildren: () => import('./newspaper-edit/newspaper-edit.module').then( m => m.NewspaperEditPageModule)
  },
  {
    path: 'order-get',
    loadChildren: () => import('./order-get/order-get.module').then( m => m.OrderGetPageModule)
  },
  {
    path: 'order-history-rider',
    loadChildren: () => import('./order-history-rider/order-history-rider.module').then( m => m.OrderHistoryRiderPageModule)
  },





  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
