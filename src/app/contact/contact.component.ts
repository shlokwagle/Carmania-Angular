import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { RequestsService } from './../lib/requests.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    subject: [null, Validators.required],
    message: [null, Validators.required],
  });
  subjectsForm = ['Give me work', 'Got a proposal', 'Advertise', 'Other'];
  onSuccess = false;
  onError = {
    show: false,
    message: '',
  };

  constructor(
    private requestsService: RequestsService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {}

  submitForm() {
    if (this.contactForm.valid) {
      this.resetError();
      this.requestsService.sendMessage(this.contactForm.value).subscribe({
        next: (n) => ((this.onSuccess = true), this.contactForm.reset()),
        error: (e) =>
          (this.onError = {
            show: true,
            message: 'Sorry, something happened.Try again.',
          }),
      });
    } else {
      this.onError = {
        show: true,
        message: 'The form is not valid, check your data.',
      };
    }
  }

  resetError() {
    this.onError = { show: false, message: '' };
  }
}
