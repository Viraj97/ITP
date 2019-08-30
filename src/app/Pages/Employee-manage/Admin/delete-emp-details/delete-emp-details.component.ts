import { Component, OnInit } from '@angular/core';

declare const validateDelete: any;
@Component({
  selector: 'app-delete-emp-details',
  templateUrl: './delete-emp-details.component.html',
  styleUrls: ['./delete-emp-details.component.css']
})
export class DeleteEmpDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClickDelete(){
    validateDelete();
  }
}
