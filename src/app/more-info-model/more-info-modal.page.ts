// more-info-modal.page.ts
import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-more-info-modal',
  templateUrl: 'more-info-modal.page.html',
})
export class MoreInfoModalPage {
  //@Input() imageUrl: string;
  //@Input() textContent: string;
  
  imageUrl!: string;
  textContent!: string;

  constructor(private modalController: ModalController) {}

  dismiss() {
    this.modalController.dismiss();
  }
}