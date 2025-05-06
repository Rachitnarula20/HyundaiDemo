import { Vehicle } from '../types';

// Importing local images
import Tucson from '../../assests/Tucson.jpg';
import Exter from '../../assests/exter.jpg';
import Verna from '../../assests/Verna.jpg';
import Creta from '../../assests/creta.jpg';
import Venue from '../../assests/venue2.jpg';
import Aura from '../../assests/Aura.jpg';



export const vehicles: Vehicle[] = [
  {
    id: 1,
    name: 'TUCSON',
    type: 'SUV',
    price: '₹29.02 Lakh*',
    features: [
      'Panoramic Sunroof',
      'Ventilated Front Seats',
      'Advanced Driver Assistance',
      'Bose Premium Sound System'
    ],
    image: Tucson
  },
  {
    id: 2,
    name: 'EXTER',
    type: 'SUV',
    price: '₹6.13 Lakh*',
    features: [
      'Voice-Enabled Smart Electric Sunroof',
      'Smart Key with Push Button Start',
      'Dashcam with Dual Camera',
      '8" Display with Navigation'
    ],
    image: Exter
  },
  {
    id: 3,
    name: 'VERNA',
    type: 'Sedan',
    price: '₹10.96 Lakh*',
    features: [
      'Level 2 ADAS with 17 Features',
      'Integrated Dual Display',
      'Bose Premium Sound System',
      'Ventilated Front Seats'
    ],
    image: Verna
  },
  {
    id: 4,
    name: 'CRETA',
    type: 'SUV',
    price: '₹11.00 Lakh*',
    features: [
      'Advanced Driver Assistance',
      'Panoramic Sunroof',
      'Bose Premium Sound System',
      'Ventilated Front Seats'
    ],
    image: Creta
  },
  {
    id: 5,
    name: 'VENUE',
    type: 'SUV',
    price: '₹7.94 Lakh*',
    features: [
      'Drive Modes (Normal, Eco, Sport)',
      '8" Touchscreen Navigation',
      'Wireless Phone Charger',
      'BlueLink Connected Car Technology'
    ],
    image: Venue
  },
  {
    id: 6,
    name: 'AURA',
    type: 'Sedan',
    price: '₹6.49 Lakh*',
    features: [
      'CNG Bi-Fuel Option',
      'Boot Space of 402L',
      '8" Touchscreen with Navigation',
      'Wireless Phone Charging'
    ],
    image: Aura
  }
];

export const heroSlides = [
  {
    id: 1,
    model: 'TUCSON',
    tagline: 'The Progressive SUV',
    image: Tucson
  },
  {
    id: 2,
    model: 'EXTER',
    tagline: 'The Future is Here',
    image: Exter
  },
  {
    id: 3,
    model: 'VERNA',
    tagline: 'Futuristic Sedan',
    image: Verna
  }
];
