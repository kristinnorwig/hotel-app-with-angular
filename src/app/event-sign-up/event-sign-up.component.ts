import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-sign-up',
  templateUrl: './event-sign-up.component.html',
  styleUrls: ['./event-sign-up.component.css'],
})
export class EventSignupComponent implements OnInit {
  signupMail: string = '';

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log('Form gesendet');
  }
}
