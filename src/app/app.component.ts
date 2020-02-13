import {Component, OnInit} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup} from '@angular/forms';
import { FormsModule} from '@angular/forms';
import {Validators} from '@angular/forms';
import {isWhiteSpace} from 'tslint';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'form2';
  mail = '';
  username = '';
  forgot = true;
  forgot2 = true;
  submit = false;
  passw = '';
  formLogin: FormGroup;
  formregister: FormGroup;
  isshowform = false;
  tStyle = {color: 'red'};
  fstyle = { color: 'White' };


  constructor(private  formBuilder: FormBuilder) {
  }
  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(5)]],
    });
    this.formregister = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(5)]],
      name: ['', [Validators.required, Validators.maxLength(35)]]
    });
  }

  get f() { return this.formLogin.controls; }
  onSubmit() {
    this.submit = true;
    if (this.formLogin.invalid) {
      return;
    }
    alert('Mail và pass đã nhập: -)\n\n' + JSON.stringify(this.formLogin.value));
  }
}
