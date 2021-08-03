import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book-add/interface';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  API:string= ('https://60f592d718254c00176dff39.mockapi.io/books')

  constructor(private http:HttpClient) { }
  getBook():Observable<Book[]>{
    return this.http.get<Book[]>(this.API)

  }
  removeBook(id :number): Observable<Book> {
    return this.http.delete<Book>(`${this.API}/${id}`);
  }
  addBook(book: Book): Observable<Book>{
    return this.http.post<Book>(this.API, book)
  }
  getDetail(id: number): Observable<Book>{
    return this.http.get<Book>(`${this.API}/${id}`)
  }
  updateBook(data: Book): Observable<Book>{
    return this.http.put<Book>(`${this.API}/${data.id}`, data)
  }
}
