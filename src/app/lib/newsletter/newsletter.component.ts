import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css'],
})
export class NewsletterComponent implements OnInit {
  newsletterForm = this.fb.group({
    email: [null, [Validators.email, Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  submitForm() {
    console.log(this.newsletterForm);
  }

  ngOnInit(): void {}
}
