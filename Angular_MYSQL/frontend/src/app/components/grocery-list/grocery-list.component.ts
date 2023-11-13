import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { GroceryListCrudService } from 'src/app/services/grocery-list-crud.service';

import { Grocery } from 'src/app/models/Grocery';


@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.scss']
})
export class GroceryListComponent implements OnInit {
  groceries$: Observable<Grocery[]> = new Observable<Grocery[]>();

  constructor(private groceryListCrudService: GroceryListCrudService) { }

  ngOnInit(): void {
    this.groceries$ = this.groceryListCrudService.fetchAll();
  }

  post(groceryItem: Partial<Grocery>): void {
    const item = (<string>groceryItem).trim();
    if (!item) return; 
    
    // this.groceries$ = this.groceryListCrudService.post()


  }

}
