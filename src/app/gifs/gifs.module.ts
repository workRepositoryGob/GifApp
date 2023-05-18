import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SharedBoxComponent } from './components/shared-box/shared-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card/card.component';
import {SharedModule} from "../shared/shared.module";




@NgModule({
  declarations: [
    HomePageComponent,
    SharedBoxComponent,
    CardListComponent,
    CardComponent
  ],
  exports: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class GifsModule { }
