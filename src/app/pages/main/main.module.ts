import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';

import { PanelModule } from 'primeng/panel';
import { MainComponent } from './main/main.component';
import { AgmCoreModule } from '@agm/core';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    PanelModule,
    CardModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAjqcu_tgf83Iu6e63GreehY11ciNy0v1I'
    }),
  ]
})
export class MainModule { }
