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

  constructor(
    private fb: FormBuilder,
    private newsletterService: NewsletterService
  ) {}

  submitForm() {
    if (this.newsletterForm.valid) {
      this.newsletterService
        .subscribeUser(this.newsletterForm.value.email)
        .subscribe({
          next: (n) => console.log(n),
          error: (e) => console.log(e),
        });
    } else {
      //handle errors
    }
  }

  ngOnInit(): void {}
}
