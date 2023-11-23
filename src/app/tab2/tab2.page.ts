import { Component,ViewChild,ElementRef,AfterViewInit,ViewContainerRef  } from '@angular/core';
import { SmallCardComponent } from '../small-card/small-card.component';
interface AirQualityMessages {
  [key: string]: string[];
}

const careMessagesGeneral: AirQualityMessages = {
  'Buena': [
    "Respira profundo, aire fresco.",
    "Disfruta del día, sin preocupaciones.",
    "Actívate al aire libre hoy.",
    "¡Excelente día para actividades!"
  ],
  'Regular': [
    "Protégete, aire no óptimo.",
    "Considera usar máscara temporalmente.",
    "Reduce exposición, precaución necesaria.",
    "Pausa deportes intensos, precaución."
  ],
  'Mala': [
    "Evita esfuerzos, cuida tu salud.",
    "Usa mascarilla en exteriores.",
    "Limita tiempo al aire libre.",
    "Precaución extra en grupos."
  ],
  'Muy mala': [
    "Quédate en interiores, precaución.",
    "Mascarilla es esencial afuera.",
    "Limítate a actividades suaves.",
    "Protege ojos y nariz."
  ],
  'Extremadamente mala': [
    "Permanece en interiores, urgente.",
    "Mascarilla necesaria siempre.",
    "Evita cualquier actividad física.",
    "Consulta a un profesional médico."
  ]
};

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  mainImages: string[] = ['./buena1.png', './regular1.png','./mala1.png', './muymala1.png'];
  messages: string[] = ['Buena', 'Regular', 'Mala', 'Muy mala', 'Extremadamente mala'];
  // Mensajes de calidad del aire
  careMessages: AirQualityMessages = {
    'Buena': [
      "Respira profundo, aire fresco.",
      "Disfruta del día, sin preocupaciones.",
      "Actívate al aire libre hoy.",
      "¡Excelente día para actividades!"
    ],
    'Regular': [
      "Protégete, aire no óptimo.",
      "Considera usar máscara temporalmente.",
      "Reduce exposición, precaución necesaria.",
      "Pausa deportes intensos, precaución."
    ],
    'Mala': [
      "Evita esfuerzos, cuida tu salud.",
      "Usa mascarilla en exteriores.",
      "Limita tiempo al aire libre.",
      "Precaución extra en grupos."
    ],
    'Muy mala': [
      "Quédate en interiores, precaución.",
      "Mascarilla es esencial afuera.",
      "Limítate a actividades suaves.",
      "Protege ojos y nariz."
    ],
    'Extremadamente mala': [
      "Permanece en interiores, urgente.",
      "Mascarilla necesaria siempre.",
      "Evita cualquier actividad física.",
      "Cierra tus ventanas."
    ]
  };

  linkImages: AirQualityMessages = {
    'Buena': [
      'assets/img/./buena1.png',
      'assets/img//buena2.png',
      'assets/img/./buena3.png',
      'assets/img/./buena4.png'
    ],
    'Regular': [
      'assets/img/./regular1.png',
      'assets/img/./muymala2.PNG',
      'assets/img/./regular3.png',
      'assets/img/./regular4.png',
    ],
    'Mala': [
      'assets/img/./mala1.png',
      'assets/img/./muymala2.PNG',
      'assets/img/./muymala1.png',
      'assets/img/./mala4.png',
    ],
    'Muy mala': [
      'assets/img/./mala1.png',
      'assets/img/./muymala2.PNG',
      'assets/img/./muymala3.png',
      'assets/img/./muymala4.png',
    ],
    'Extremadamente mala': [
      'assets/img/./xmala1.png',
      'assets/img/./muymala2.PNG',
      'assets/img/./mala1.png',
      'assets/img/./buena1.png',
    ]
  };

  mainImage: string = 'assets/img/' + this.mainImages[0];
  linkImage: string[] = this.linkImages['Buena'];
  message: string = this.messages[0];
  careMessage: string[] = this.careMessages['Buena'];
  currentIndex: number = 0;

  constructor() {
  }

  ngOnInit(): void {
    // Iniciar el temporizador para cambiar de elemento cada 5 segundos
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.messages.length;
      this.mainImage = 'assets/img/' + this.mainImages[this.currentIndex];
      this.message = this.messages[this.currentIndex];
      this.careMessage = this.careMessages[this.message];
      this.linkImage = this.linkImages[this.message];
    }, 5000);
  }

  getColor(message: string): string {
    switch (message) {
      case 'Buena':
        return 'rgb(1, 152, 119)';
      case 'Regular':
        return 'rgb(241, 135, 33)';
      case 'Mala':
        return 'rgb(186, 37, 95)';
      case 'Muy mala':
        return 'rgb(113, 64, 49)';
      case 'Extremadamente mala':
        return 'rgb(60, 60, 58)';
      default:
        return 'white';
    }
  }
}



