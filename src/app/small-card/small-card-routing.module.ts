import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmallCardComponent } from './small-card.component';

const routes: Routes = [
  {
    path: '',
    component: SmallCardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmallCardComponentRoutingModule {}