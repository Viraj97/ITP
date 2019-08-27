import { Component, OnInit } from '@angular/core';
declare const validate:any;

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onclick(){
    validate();
  }
  
}
