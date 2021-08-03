import { Component, OnInit } from '@angular/core';
import { Book } from '../book-add/interface';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
books: Book[] | undefined;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBook().subscribe(data => this.books = data)
  }
  onRemove(id:number):void{
    let confirm = window.confirm("ban co muon xoa?")
    if(confirm){
      this.bookService.removeBook(id).subscribe(data=>{
        this.books= this.books?.filter(item=> item.id!= data.id)
      })
    }
  }

}
