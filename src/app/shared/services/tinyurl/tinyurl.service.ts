import { Injectable } from '@angular/core';

import { Shortcodes } from '../../interfaces/shortcodes.interface';

@Injectable({
  providedIn: 'root'
})
export class TinyUrlService {

  constructor() { }

  getAllUrls(): Shortcodes[] {
    return [
      {
        key: 'abjekdk',
        url: 'https://www.google.com'
      },
      {
        key: 'dkelsje293',
        url: 'https://www.yahoo.com'
      }
    ];
  }
}
