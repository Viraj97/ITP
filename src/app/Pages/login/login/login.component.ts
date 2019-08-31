import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { userInfo } from 'os';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }

  model = {
    uName: 'AM001',
    pw: 'Abc123',
  };

  ngOnInit() {
    this.getConfig();
  }

  getConfig() {
    this.http.get('http://127.0.0.1:3000/getUsers1').subscribe((res) => {
      this.model.uName = res[0].item;
    });
  }

  method1() {
    this.http.get('http://127.0.0.1:3000/login', {
      params: { user_id: this.model.uName, pw: this.model.pw }
    }).subscribe((response) => {
      console.log('response here', response[0].login);
    });
  }

}
