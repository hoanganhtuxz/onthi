import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book-add/interface';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-up',
  templateUrl: './book-up.component.html',
  styleUrls: ['./book-up.component.css']
})
export class BookUpComponent implements OnInit {
  book:Book |undefined;
  constructor( private activatedRoute: ActivatedRoute, private bookService: BookService, private router: Router) {
    this.activatedRoute.params.subscribe(params => {
      this.bookService.getDetail(params.id).subscribe( data => {
        this.book = data
      })
    })
   }


  ngOnInit(){
  }
  onUp(){
    if(this.book !== undefined){
      this.bookService.updateBook(this.book).subscribe(data => {
        console.log('successfully, data: ', data)
        this.router.navigate(['/list'])
      })
    }
  }

}
