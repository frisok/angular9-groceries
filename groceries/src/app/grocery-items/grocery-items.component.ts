import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grocery-items',
  templateUrl: './grocery-items.component.html',
  styleUrls: ['./grocery-items.component.scss']
})
export class GroceryItemsComponent implements OnInit {

  items: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13]

  constructor() { }

  ngOnInit() {
  }

}
