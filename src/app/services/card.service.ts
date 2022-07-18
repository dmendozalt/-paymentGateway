import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  ENDPOINT: string = 'https://localhost:44391/api/Payments';

  constructor(private http: HttpClient) {}

  setPayment(CardInfo: any) {
    return this.http.post(this.ENDPOINT, CardInfo);
  }

  getPayment(paymentId: string) {
    const endpoint = `${this.ENDPOINT}/${paymentId}`;
    return this.http.get(endpoint);
  }
}
