import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

import { Metadata1 } from '../models/metadata';
import { Metadata } from '../models/metadata';
import { MetadataGraph } from '../models/metadata';
import { MetadataGraphColor } from '../models/metadata';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  //private APIUrl = environment.APIUrl;http://localhost:5277/api/Pinot/
  //private APIUrl = "//localhost:5277/api/Pinot/";
  private APIUrl= "http://localhost:3000/api/";
  
  constructor(private http:HttpClient) { }

  //#region for Metadata
  getMetadata1(): Observable<Metadata1[]> {
    return this.http.get<Metadata1[]>(this.APIUrl+'GetMetadata');
  }


  getMetadata(): Observable<Metadata[]> {
    return this.http.get<Metadata[]>(this.APIUrl+'GetMetadata');
  }

  addMetadata(addMetadataRequest:Metadata): Observable<Metadata> {
    return this.http.post<Metadata>(this.APIUrl+'AddMetadata', addMetadataRequest);
  }

  updateMetadata(updateMetadataRequest: Metadata): Observable<Metadata>{
    return this.http.put<Metadata>(this.APIUrl+'UpdateMetadata', updateMetadataRequest);
  }

  deleteMetadata(deletedID: string): Observable<Metadata>{
    return this.http.delete<Metadata>(this.APIUrl+'DeleteMetadata?condition='+deletedID);
  }



  getForGraph(cd: string) {
    return this.http.get<MetadataGraph[]>(this.APIUrl+'GetMetadata_graph?condition='+cd);
  }

  getColorList(cd: string) {
    //return this.http.get<MetadataGraphColor[]>(this.APIUrl+'GetMetadata_graphColor?condition='+cd);
    return this.http.get<MetadataGraphColor[]>(this.APIUrl+'GetMetadata_graphColor?id='+cd);
  }
  
  gerMetadataBProduction(cd: string) {
    return this.http.get<Metadata[]>(this.APIUrl+'GetMetadata_production?condition='+cd);
  }
  //#endregion
  //#region action when closing button
  private _listeners = new Subject<any>();

  listen(): Observable<any> {
    return this._listeners.asObservable();
  }

  filter(filterby: string) {
    this._listeners.next(filterby);
  }
  //#endregion
}
