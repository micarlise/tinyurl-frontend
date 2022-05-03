import { Component, OnInit } from '@angular/core';

import { Shortcodes } from '../shared/interfaces/shortcodes.interface';
import { TinyUrlService } from '../shared/services/tinyurl/tinyurl.service';

@Component({
  selector: 'app-urls',
  templateUrl: './urls.component.html',
  styleUrls: ['./urls.component.css']
})
export class UrlsComponent implements OnInit {
  urls: Shortcodes[];

  constructor(private tinyurls: TinyUrlService) { }

  ngOnInit(): void {
    this.loadUrls();
  }

  loadUrls() {
    this.urls = this.tinyurls.getAllUrls();
  }

}
