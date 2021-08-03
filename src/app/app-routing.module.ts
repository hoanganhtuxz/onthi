import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookAddComponent } from './book-add/book-add.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookUpComponent } from './book-up/book-up.component';

const routes: Routes = [
  {path: 'add' ,component: BookAddComponent},
  {path: 'update/:id' ,component: BookUpComponent},
  {path: 'list' ,component: BookListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
