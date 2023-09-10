import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroceryListComponent } from './components/grocery-list/grocery-list.component';

const routes: Routes = [
  { path: "", redirectTo: "components/grocery-list", pathMatch: "full"},
  { path: "components/grocery-list", component: GroceryListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
