import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'dashboard', name: 'Datos Generales', type: 'link', icon: 'av_timer' },
  { state: 'button', type: 'link', name: 'Academico y Laboral', icon: 'crop_7_5' },
  { state: 'grid', type: 'link', name: 'Especialidad', icon: 'view_comfy' },
  { state: 'lists', type: 'link', name: 'Informacion Personal', icon: 'view_list' },
  { state: 'menu', type: 'link', name: 'Datos Fiscales', icon: 'view_headline' },
  { state: 'tabs', type: 'link', name: 'Documentos', icon: 'tab' },
  { state: 'stepper', type: 'link', name: 'Tarifa por Turno', icon: 'web' },
  { state: 'expansion', type: 'link', name: 'Datos Bancarios', icon: 'vertical_align_center'},
  { state: 'chips', type: 'link', name: 'Horarios de Atencion', icon: 'vignette' }
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
