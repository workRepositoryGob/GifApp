import {Component, ElementRef, ViewChild} from '@angular/core';
import {GifsService} from "../../../gifs/services/gifs.service";

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gifService:GifsService) {

  }

  get tags():string[]{
    return this.gifService.tagsHistorial;
  }
  searchTag( newTag:string){
    console.log('searchTag: ',newTag);

    this.gifService.searchTag(newTag);



  }
}
