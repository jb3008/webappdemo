import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, ) { }


  getUserData():Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get(url, {})
         .map((res:any)=>{
           return res;
        })
        .catch((e:any)=>{
            return Observable.throw(e);
        });
}

}
