import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../quotes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.page.html',
  styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage {
  quotes: any;
  data: any;

  constructor(private quotesProvider: QuotesService, private activatedRoute: ActivatedRoute) {
      this.quotesProvider.getQuotes().subscribe( data => {
        console.log(data);
        this.quotes = data;
      });
  }

}
