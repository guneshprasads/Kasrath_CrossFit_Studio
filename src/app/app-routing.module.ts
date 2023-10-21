import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RowoneComponent } from './rowone/rowone.component';
import { ServicesComponent } from './services/services.component';
import { RowsecondComponent } from './rowsecond/rowsecond.component';

const routes: Routes = [
  { path: '', component: RowoneComponent },
  { path: 'Service', component: ServicesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
