import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from 'src/app/pages/info/info.component';

const routes: Routes = [
    { path: 'info/:id', component: InfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ChartItemRoutingModule { }
