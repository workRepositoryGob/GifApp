import {Component, ElementRef, ViewChild} from '@angular/core';
import {GifsService} from "../../services/gifs.service";

@Component({
  selector: 'gifs-shared-box',
  templateUrl: './shared-box.component.html',
  styleUrls: ['./shared-box.component.css']
})
export class SharedBoxComponent {

  @ViewChild('txtTagInput')
  tagInput!:ElementRef<HTMLInputElement>;

  constructor(private gifService:GifsService) {
  }
  searchTag(){
    //Sconsole.log('searchTag: ',newTag);
    if (this.tagInput.nativeElement.value.trim().length===0)return;
    this.gifService.searchTag(this.tagInput.nativeElement.value);
    this.tagInput.nativeElement.value='';

  }
}
