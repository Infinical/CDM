import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CDMServices {

  constructor(private http: HttpClient) { }

  public createMachine(reqPayload) {
    return this.http.post(`${environment.baseurl}register_cdm`, reqPayload, {responseType: 'json'});
  }

  public viewMachines(reqPayload) {
    return this.http.post(`${environment.baseurl}get_list_of_cdm`, reqPayload, {responseType: 'json'});
  }

  public updateMachine(reqPayload) {
    return this.http.post(`${environment.baseurl}update_cdm_BySerialNo`, reqPayload, {responseType: 'json'});
  }
}
