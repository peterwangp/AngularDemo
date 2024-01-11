import { Component, OnInit } from '@angular/core';
import { userdata } from 'src/app/model/userdata';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  usermodel: userdata = {
    firstname: '',
    lastname: '',
    useremail: '',
    postcode: ''
  };

  User: any;
  constructor() {
    this.User = ['Super Admin', 'Manager', 'User'];
  }

  ngOnInit(): void {}
  onformsubmit() {
    console.log(this.usermodel);
  }
}
