import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Mobile {
  _id?: string;
  name: string;
  brand: string;
  price: number;
  description: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class MobileService {
  private apiUrl = 'http://localhost:3000/api/mobiles';

  constructor(private http: HttpClient) { }

  getMobiles(): Observable<Mobile[]> {
    return this.http.get<Mobile[]>(this.apiUrl);
  }

  addMobile(mobile: Mobile): Observable<Mobile> {
    return this.http.post<Mobile>(this.apiUrl, mobile);
  }
}
