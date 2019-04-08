import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.page.html',
  styleUrls: ['./quotes-detail.page.scss'],
})
export class QuotesDetailPage implements OnInit {
  q:any;

  constructor(private activatedRoute: ActivatedRoute) {
    this.q = this.activatedRoute.snapshot.paramMap.get('q');
    // this.q = this.navParams.get('q');
  }

 ngOnInit() {
  this.q = this.activatedRoute.snapshot.paramMap.get('q');
   // this.myId = this.activatedRoute.snapshot.paramMap.get('quote');
 }
}
