import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { NewsletterService } from '../newletter.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css'],
})
export class NewsletterComponent implements OnInit {
  newsletterForm = this.fb.group({
    email: [null, [Validators.email, Validators.required]],
  });

  formError = { show: false, message: '' };
  formSuccess = false;
  disableButton = false;

  constructor(
    private fb: FormBuilder,
    private newsletterService: NewsletterService
  ) {}

  submitForm() {
    this.disableButton = true;
    if (this.newsletterForm.valid) {
      this.newsletterService
        .subscribeUser(this.newsletterForm.value.email)
        .subscribe({
          next: (n) => ((this.formSuccess = true), this.enableButton()),
          error: (e) => this.handleError('show', 'you are already subscribed'),
        });
    } else {
      //handle errors
      this.handleError('show', 'you need a valid email to subscribe!!');
    }
  }

  handleError(type: string, message: string) {
    if (type === 'reset') {
      this.formError = { show: false, message };
    } else {
      this.formError = { show: true, message };
    }
    this.enableButton();
  }

  enableButton() {
    setTimeout(() => {
      this.disableButton = false;
    }, 1500);
  }

  ngOnInit(): void {}
}
