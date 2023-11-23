import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  pollutants: string[] = ['PM10', 'Ozono', 'No', 'O3'];
  pollutantsInformation: { [key: string]: string } = {
    "PM10": "Las partículas PM10 (partículas en suspensión de diámetro menor a 10 micrómetros) provienen principalmente de la combustión de vehículos y actividades industriales.",
    "Ozono": "El ozono, generado por la reacción de óxidos de nitrógeno y compuestos orgánicos volátiles bajo la acción de la luz solar, puede causar problemas respiratorios y daño pulmonar.",
    "No": "Los óxidos de nitrógeno, originados en la quema de combustibles fósiles, como los vehículos y las plantas de energía, contribuyen a problemas respiratorios, lluvia ácida y cambio climático.",
    "O3": "Los óxidos de azufre, producidos por la quema de combustibles fósiles, son irritantes pulmonares y contribuyen a la formación de partículas finas en el aire."
  };
  selectedPollutant: string;
  namePollutant: string;
  paragraph: string;

  constructor() {}

  selectPollutant(pollutant: string) {
    this.selectedPollutant = pollutant;
    // Aquí puedes agregar la lógica adicional que necesites
    // por ejemplo, actualizar las variables namePollutant y paragraph
    this.namePollutant = `${pollutant}`;
    this.paragraph = this.pollutantsInformation[pollutant];
  }

  isPollutantSelected(pollutant: string): boolean {
    return this.selectedPollutant === pollutant;
  }

}
