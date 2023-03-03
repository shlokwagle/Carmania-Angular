import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { RequestsService } from '../lib/requests.service';

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

  constructor(
    private requestsService: RequestsService,
    private fb: FormBuilder
  ) {}

  submitForm() {
    if (this.contactForm.valid) {
      this.requestsService.sendMessage(this.contactForm.value).subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  ngOnInit(): void {}
}
