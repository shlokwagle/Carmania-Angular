import { Component, OnInit } from '@angular/core';
import { RequestsService, Articles } from 'src/app/lib/requests.service';

@Component({
  selector: 'app-articles-home',
  templateUrl: './articles-home.component.html',
  styleUrls: ['./articles-home.component.css'],
})
export class ArticlesHomeComponent implements OnInit {
  articles: Articles[];
  start = 0;
  constructor(private requestService: RequestsService) {}

  ngOnInit(): void {
    this.requestService
      .getArticles({
        _sort: 'id',
        _order: 'asce',
        _limit: 6,
        _start: this.start,
      })
      .pipe()
      .subscribe((data) => {
        this.articles = data;
      });
  }
}
