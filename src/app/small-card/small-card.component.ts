import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MoreInfoModalPage } from '../more-info-model/more-info-modal.page';

@Component({
  selector: 'app-small-card',
  templateUrl: 'small-card.component.html',
})
export class SmallCardComponent {
  @Input() imageUrl: string;
  @Input() textContent: string;
  //imageUrl!: string;
  //textContent!: string;

  constructor(private modalController: ModalController) {}

  async showMoreInfo() {
    const modal = await this.modalController.create({
      component: MoreInfoModalPage,
      componentProps: {
        imageUrl: this.imageUrl,
        textContent: this.textContent,
      },
    });
    return await modal.present();
  }
}