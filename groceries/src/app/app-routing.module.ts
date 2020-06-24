import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CurrentComponent} from './current/current.component';
import {GroceryItemsComponent} from './grocery-items/grocery-items.component';
import {GroceryListComponent} from './grocery-list/grocery-list.component';

const routes: Routes = [
  {
    path: '',
    component: GroceryItemsComponent
  },
  {
    path: 'lists',
    component: GroceryListComponent
  },
  {
    path: 'current',
    component: CurrentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
