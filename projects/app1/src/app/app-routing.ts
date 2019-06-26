import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { View1Component } from 'projects/app1/src/app/view1/view1.component';
import { View2Component } from 'projects/app1/src/app/view2/view2.component';

const routes: Routes = [
  { path: 'app1/one', component: View1Component },
  { path: 'app1/two', component: View2Component },
  { path: 'app1', redirectTo: 'app1/one' },
  { path: '**', redirectTo: '/app1' }
 ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
