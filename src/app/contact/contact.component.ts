import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
  });

  onSubmit(form: any) {
    if (form.valid) {
      const email = form.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http
        .post(
          'https://formspree.io/f/xayvlyap',
          { name: email.name, replyto: email.email, message: email.message },
          { headers: headers }
        )
        .subscribe((response: any) => {
          console.log(response);
        });
    }
  }

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
}
