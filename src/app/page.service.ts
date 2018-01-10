import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";





@Injectable()
export class PageService {
  constructor(private http: HttpClient) {

  }
  getDatas( currentPage: any = 0, pageSize: any = 10): Promise<any> {
    return new Promise((resolve, reject) => {
      let params = new HttpParams().set('pageSize', pageSize).set('currentPage', currentPage);
      console.log(params.toString());
      this.http.get('http://localhost:3000/room/getData',  { params: params}).subscribe((datas: any) => resolve(datas));
    });
  }
}
