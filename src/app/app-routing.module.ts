import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path:'',redirectTo:'nested-menu',pathMatch:'full'},
  { path: 'nested-menu', loadChildren: () => import('./@pages/nested-menu/nested-menu.module').then(m => m.NestedMenuModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
