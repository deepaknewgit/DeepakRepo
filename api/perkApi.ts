import { APIRequestContext } from "@playwright/test";
import {ENV} from "../config/env"

export class PerkAPI {

    
    request:APIRequestContext;
    

    constructor(request:APIRequestContext){
        this.request = request
    }


    createPerk(payload: any) 
    {

        return this.request.post(`${ENV.baseURLAPI}/perks`, {
          headers: this.getHeaders(),
          data: payload,
        });

    
    }

    getPerk(perkunique:string){

        return this.request.get(`${ENV.baseURLAPI}/perks/${perkunique}`,{headers :this.getHeaders()}

    )}


    updatePerk(UpdatePayload:any,perkunique1:string){

        return this.request.put(`${ENV.baseURLAPI}/pointperks/${perkunique1}`,{headers:this.getHeaders(),data:UpdatePayload})
    }


    deletePerk(perkunique3:string){

        return this.request.delete(`${ENV.baseURLAPI}/pointperks/${perkunique3}`,{headers :this.getHeaders()}

    )}


 


private getHeaders() {
    return {
        Authorization: `Token ${ENV.authToken}`,
      //'x-tenant-id': ENV.tenantId,
      'x-application-id': ENV.appId,
      //'x-location-id': ENV.locationId,
      'Content-Type': 'application/json',
    };
  } 






}