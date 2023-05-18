import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Gif, SearchResponse} from "../interfaces/gifs.interfaces";

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifList:Gif[]=[];

  private _tagsHistorial:string[]=[];
  private apiKey:string='t0EKfy44jHiK8U6FKiU05OHuI4GWgg1D';
  private url:string='https://api.giphy.com/v1/gifs';

  constructor(private httpClient:HttpClient) {
    this.loadLocalStorage();
  }

  get tagsHistorial():string[]{
    return [...this._tagsHistorial];
  }

  private saveLocalStorage():void{
    localStorage.setItem('tagsHistorial',JSON.stringify(this._tagsHistorial));
  }
  private loadLocalStorage():void {
    if (!localStorage.getItem('tagsHistorial')) return;

    this._tagsHistorial = JSON.parse(localStorage.getItem('tagsHistorial')!);

    if (this._tagsHistorial.length===0) return;
    this.searchTag(this._tagsHistorial[0]);


  }
  searchTag(tag:string):void{

    this.organizeTags(tag);

    this.httpClient.get<SearchResponse >(`${this.url}/search`,{
      params:{
        api_key:this.apiKey,
        limit:'12',
        q:tag}})
      .subscribe(value=>{
      this.gifList=value.data;

    });
  }

  /*private organizeTags(tag:string ):void{

    tag=tag.trim().toLowerCase();
    if (this._tagsHistorial.includes(tag)){
      this._tagsHistorial=this._tagsHistorial.filter(value => value!==tag);
    }
    this._tagsHistorial.unshift(tag);
    this._tagsHistorial=this._tagsHistorial.splice(0,10);

  }*/
  private organizeTags(tag:string ):void{

    if (!this._tagsHistorial.includes(tag.trim().toLowerCase())) {
      this._tagsHistorial.unshift(tag.trim().toLowerCase());
      this._tagsHistorial = this._tagsHistorial.slice(0, 10);
      this.saveLocalStorage();
    }
  }



}
