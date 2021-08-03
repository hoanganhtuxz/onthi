import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from './interface';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
books: Book ={
  id: Math.floor((1 + Math.random()) * 0x10000),
  title:'',
  price:0,
  desc:'',
  auther:''

}
  constructor(private bookService: BookService,private router: Router) { }

  ngOnInit(): void {
  }
  onAdd():void{
    this.bookService.addBook(this.books).subscribe(data => console.log(data))
    this.router.navigate(['/list'])
  }

}
