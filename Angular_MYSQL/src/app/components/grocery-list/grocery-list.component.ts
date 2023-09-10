import { Component } from '@angular/core';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.scss']
})
export class GroceryListComponent {

  groceries = [
    { id: 1, item: 'bread'},
    { id: 2, item: 'milk'}
  ];

}
