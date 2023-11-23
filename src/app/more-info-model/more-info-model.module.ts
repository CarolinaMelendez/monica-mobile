import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MoreInfoModalPage } from './more-info-modal.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';


import { MoreInfoModalPageRoutingModule } from './more-info-model-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MoreInfoModalPageRoutingModule
  ],
  declarations: [MoreInfoModalPage],
  exports: [MoreInfoModalPage],
})
export class MoreInfoModalPageModule {}
