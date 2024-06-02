import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthorComponent } from './author/author/author.component';
// import {ArcGisComponent} from './arc-gis/arc-gis.component'
// import { DatasetComponent } from './dataset/dataset.component';
// import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '',component: DashboardComponent},
  {path: 'Author',component: AuthorComponent},
  // {path: 'ArcGis',component: ArcGisComponent},
  // {path: 'DataSet',component: DatasetComponent},
  // {path: 'login',component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
