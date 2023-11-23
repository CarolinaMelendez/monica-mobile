import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SmallCardComponent } from './small-card.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';


import { SmallCardComponentRoutingModule } from './small-card-routing.module';
import { MoreInfoModalPageModule } from '../more-info-model/more-info-model.module';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    SmallCardComponentRoutingModule,
    MoreInfoModalPageModule
  ],
  declarations: [SmallCardComponent],
  exports: [SmallCardComponent],
})
export class SmallCardModule {} 