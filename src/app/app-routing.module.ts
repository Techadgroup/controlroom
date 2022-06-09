import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ServicesComponent } from './modules/services/services.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,

  children: [{

    path: '',
    component: DashboardComponent
  },{

    path: 'services',
    component: ServicesComponent
  }
]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
