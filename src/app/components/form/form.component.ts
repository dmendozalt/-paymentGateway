import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  paid: number = 5000;
  lastPayments: string[] = [];

  paytmentForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cardService: CardService
  ) {
    this.paytmentForm = this.fb.group({
      // nameOnCard: ['', Validators.required],
      cardName: ['4242424242424242', Validators.required],
      expiry: ['07/23', Validators.required],
      cvv: ['123', Validators.required],

      // billingAddress: ['', Validators.required],
      // streetAdress: ['', Validators.required],
      // city: ['', Validators.required],
      // state: ['', Validators.required],
      // zip: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  sendPayment() {
    const rawForm = this.paytmentForm.getRawValue();
    const form = {
      number: rawForm.cardName,
      expMonth: parseInt(rawForm.expiry.split('/')[0]),
      expYear: parseInt(rawForm.expiry.split('/')[1]),
      cvv: rawForm.cvv,
    };
    this.cardService.setPayment(form).subscribe((response: any) => {
      this.lastPayments.push(response.id);
    });
  }

  retrievePayment(paymentId: string) {
    this.cardService.getPayment(paymentId).subscribe((response: any) => {
      console.log(response);
    });
  }
}
