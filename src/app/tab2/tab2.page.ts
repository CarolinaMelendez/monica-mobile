import { Component,ViewChild,ElementRef,AfterViewInit,ViewContainerRef  } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  mainImages: string[] = ['./buena1.png', './regular1.png','./mala1.png', './muymala1.png'];
  messages: string[] = ['Buena', 'Regular', 'Mala', 'Muy mala'];
  careMessages: string[] = ['La calidad del aire es buena, puedes disfrutar de actividades al aire libre, como caminar, hacer ejercicio o simplemente ventilar tu hogar. También es un buen momento para ahorrar energía y ser consciente del medio ambiente. Mantén en mente que la calidad del aire puede variar, así que sigue las recomendaciones cuando sea necesario.',
                          'Acciones de precaución para niños, adultos mayores y personas con enfermedades cardiorrespiratorias. Evitar transitar por lugares de alto tráfico',
                          'Niños, adultos mayores y personas con enfermedades cardiorespiratorias, deben evitar los ambientes abiertos. Evitar transitar por lugares con alto tráfico vehicular, evitar realizar ejercicios al aire libre, especialmente a primeras horas de la mañana.',
                          'Alerta sanitaria, el aire produce efectos adversos en la salud de la población, en particular a los niños, adultos mayores y personas con enfermedades cardiorespiratorias como el asma. Evitar transitar por lugares de alto tránsito vehicular, evitar realizar ejercicios al aire libre, mantenerse en lugares cerrados y utilizar barbijo de protección.']
  
  mainImage: string = 'assets/img/' + this.mainImages[0];
  message: string = this.messages[0];
  careMessage: string = this.careMessages[0];
  currentIndex: number = 0;

  constructor() {
  }

  ngOnInit(): void {
    // Iniciar el temporizador para cambiar de elemento cada 5 segundos
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.messages.length;
      this.mainImage = 'assets/img/' + this.mainImages[this.currentIndex];
      this.message = this.messages[this.currentIndex];
      this.careMessage = this.careMessages[this.currentIndex];
    }, 5000);
  }

  getColor(message: string): string {
    switch (message) {
      case 'Buena':
        return 'lime';
      case 'Regular':
        return 'yellow';
      case 'Mala':
        return 'red';
      case 'Muy mala':
        return 'darkgreen';
      default:
        return 'white';
    }
  }
}



