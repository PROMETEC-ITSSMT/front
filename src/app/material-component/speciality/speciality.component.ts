import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-grid',
  templateUrl: './speciality.component.html',
  styleUrls: ['./speciality.component.scss']
})
export class GridComponent {
  cards = [
    {title: 'Title 1', content: 'Content 1'},
    {title: 'Title 2', content: 'Content 2'},
    {title: 'Title 3', content: 'Content 3'},
    {title: 'Title 4', content: 'Content 4'}
  ];
  typesOfShoes = [
    'Administración de medicamentos via oral.',
    'Toma de signos vitales y vigilancia de los mismos',
    'Procedimientos médicos básicos (inyecciones, suero, etc)',
    'Ayuda en higiene personal (baño de esponja, tina, etc)',
    'Administración de fórmula y otros alimentos',
    'Limpieza y esterilización de botellas y chupones',
    'Ayuda en tareas escolares',
    'Implementación  de actividades recreativas.',
    'Acompañamiento a clases particulares o  actividades extracurriculares.'
  ];
  typesOfShoes2 = [
    'Toma de signos vitales y vigilancia de los mismos',
    'Procedimientos médicos básicos (inyecciones, suero, etc)',
    'Administración de medicamentos vía oral',
    'Ayuda en higiene personal (baño de esponja, tina, etc)',
    'Acompañante en vistas médicas, paseos y actividades recreativas'
  ];
  messages = [
    {
      from: 'Nirav joshi (nbj@gmail.com)',
      image: 'assets/images/users/1.jpg',
      subject: 'Material angular',
      content: 'This is the material angular template'
    },
    {
      from: 'Sunil joshi (sbj@gmail.com)',
      image: 'assets/images/users/2.jpg',
      subject: 'Wrappixel',
      content: 'We have wrappixel launched'
    },
    {
      from: 'Vishal Bhatt (bht@gmail.com)',
      image: 'assets/images/users/3.jpg',
      subject: 'Task list',
      content: 'This is the latest task hasbeen done'
    }
  ];

  folders = [
    {
      name: 'Photos',
      updated: new Date('1/1/16')
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16')
    },
    {
      name: 'Work',
      updated: new Date('1/28/16')
    }
  ];
  notes = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16')
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16')
    }
  ];
}
