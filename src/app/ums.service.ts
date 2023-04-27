import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UmsService {

  constructor(private logser:HttpClient) { 

  }
  baseurl:string='http://15.206.171.20:9090/'
  loginser(body:any){
    return this.logser.post (`${this.baseurl}login`,body,{responseType:'text'})
  }
  regser(id:number){
    return this.logser.get(`${this.baseurl}cities/${id}`)
  }
  counrties(){
    return this.logser.get(`${this.baseurl}countries`)
  }
  cities(stateId:number){
    return this.logser.get(`${this.baseurl}cities/${stateId}`)
  }

  checkmail(email:any){
    return this.logser.get(`${this.baseurl}emailcheck/${email}`)
  }
  saveuser(body:any){
    return this.logser.post (`${this.baseurl}saveUser`,body,{responseType:'text'})
  }
  states(countryId:number){
    return this.logser.get(`${this.baseurl}states/${countryId}`)
  }
  forgotpass(emailId:any){
    return this.logser.get(`${this.baseurl}forgotPwd/${emailId}`,{responseType:'text'})
  }
  unlockacc(body:any){
    return this.logser.post(`${this.baseurl}unlock`,body,{responseType:'text'})
  }

}
