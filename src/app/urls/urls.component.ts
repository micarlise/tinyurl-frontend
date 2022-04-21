import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-urls',
  templateUrl: './urls.component.html',
  styleUrls: ['./urls.component.css']
})
export class UrlsComponent implements OnInit {
  urls = [
    {
      key: 'abjekdk',
      url: 'https://www.google.com'
    },
    {
      key: 'dkelsje293',
      url: 'https://www.yahoo.com'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
