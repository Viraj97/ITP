import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-stock-details',
  templateUrl: './delete-stock-details.component.html',
  styleUrls: ['./delete-stock-details.component.css']
})
export class DeleteStockDetailsComponent implements OnInit {

  constructor() { }

  model = {
    NIC:'',
    telephone:'',
    supCategory:'',
    vegItems:'',
    fruitItems:'',
    meatItems:'',
    bevItems:'',
    quantity:'',
    orderedDate:'',
    purchasedDate:'',
  }

  ngOnInit() {
  }

}
