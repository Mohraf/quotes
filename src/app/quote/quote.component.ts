import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [];

  toggleDetails(index: number) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  addNewQuote(quote: Quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.push(quote);
  }

  upvoteQuote(index: number) {
    this.quotes[index].upvotes += 1;
  }

  downvoteQuote(index: number) {
    this.quotes[index].downvotes += 1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
