import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private userstate$ = new BehaviorSubject<any>({
   
  });
  constructor() { }

  changeUserState(myChange:any) {
    this.userstate$.next(myChange);
  }
  getUserState() {
    return this.userstate$.asObservable();
  }
}
