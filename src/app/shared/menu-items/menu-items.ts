import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'dashboard', name: 'Datos Generales', type: 'link', icon: 'tab' },
  { state: 'academics', type: 'link', name: 'Academico y Laboral', icon: 'folder_shared' },
  { state: 'specs', type: 'link', name: 'Especialidad', icon: 'auto_graph' },
  { state: 'lists', type: 'link', name: 'Informacion Personal', icon: 'person' },
  { state: 'menu', type: 'link', name: 'Datos Fiscales', icon: 'account_balance' },
  { state: 'tabs', type: 'link', name: 'Documentos', icon: 'content_copy' },
  { state: 'stepper', type: 'link', name: 'Tarifa por Turno', icon: 'attach_money' },
  { state: 'expansion', type: 'link', name: 'Datos Bancarios', icon: 'credit_card'},
  { state: 'chips', type: 'link', name: 'Horarios de Atencion', icon: 'av_timer' }
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
